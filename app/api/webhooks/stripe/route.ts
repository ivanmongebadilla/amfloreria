import Stripe from "stripe";

import { stripe } from "@/src/lib/stripe";
import { createOrderFromDraft } from "@/src/actions/orders/createOrderFromDraft";
import { sendNewOrderNotification } from "@/src/services/sendNewOrderNotification";

export async function POST(request: Request) {
    const body = await request.text();

    const signature =
        request.headers.get("stripe-signature");

    if (!signature) {
        return new Response(
            "Missing stripe signature",
            {
                status: 400,
            }
        );
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error) {
        console.error(
            "Webhook signature verification failed",
            error
        );

        return new Response(
            "Invalid signature",
            {
                status: 400,
            }
        );
    }

    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const session =
                    event.data.object as Stripe.Checkout.Session;

                const checkoutDraftId =
                    session.metadata?.checkout_draft_id;

                if (!checkoutDraftId) {
                    throw new Error(
                        "Missing checkout_draft_id"
                    );
                }

                console.log(`draft_id from route stripe: ${checkoutDraftId}`)

                const order =
                    await createOrderFromDraft(
                        checkoutDraftId
                    );

                console.log(`Order from route stripe: ${order}`)    

                try {
                    await sendNewOrderNotification(order)
                } catch (error) {
                    console.error(
                        "Failed to send notification",
                        error
                    );
                }

                break;
            }

            default:
                console.log(
                    `Unhandled event type: ${event.type}`
                );
        }

        return Response.json({
            received: true,
        });

    } catch (error) {
        console.error(
            "Webhook processing failed",
            error
        );

        return new Response(
            "Webhook processing failed",
            {
                status: 500,
            }
        );
    }
}