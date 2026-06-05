import { stripe } from "@/src/lib/stripe";
import { NextResponse } from "next/server";
import { createCheckoutDraft, updateCheckoutDraft } from "@/src/actions/checkout/checkoutDraft";

export async function POST(request: Request) {
    try{
        const {
            items,

            customerName,
            customerPhone,
            customerAddress,

            deliveryDate,
            deliveryTime,

            deliveryInstructions,
            cardMessage,
        } = await request.json();

        const draft = await createCheckoutDraft({
            customer_name: customerName,
            customer_phone: customerPhone,
            customer_address: customerAddress,

            delivery_date: deliveryDate,
            delivery_time: deliveryTime,

            delivery_instructions:
                deliveryInstructions,

            card_message:
                cardMessage,

            cart: items,
        });

        const session = await stripe.checkout.sessions.create({
        mode: "payment",

        metadata: {
            checkout_draft_id: draft.data.id,
            customer_name: customerName,
            customer_phone: customerPhone,
            customer_address: customerAddress,

            delivery_date: deliveryDate,
            delivery_time: deliveryTime,

            card_message: cardMessage,
            delivery_instructions: deliveryInstructions || "",
        },

        line_items: items.map(
            (item: {
            title: string;
            price: number;
            quantity: number;
            }) => ({
            price_data: {
                currency: "mxn",

                product_data: {
                name: item.title,
                },

                unit_amount: Math.round(item.price * 100),
            },

            quantity: item.quantity,
            })
        ),

        success_url:
            "http://localhost:3000/checkout/success",

        cancel_url:
            "http://localhost:3000/checkout/cancel",
        });

        await updateCheckoutDraft(draft.data.id, session.id)

        return NextResponse.json({
            url: session.url,
        });
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            {
                error: "Failed to create checkout session"
            },
            {
                status: 500
            }
        )
    }
}