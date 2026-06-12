import { stripe } from "@/src/lib/stripe";
import { NextResponse } from "next/server";
import { createCheckoutDraft, updateCheckoutDraft } from "@/src/actions/checkout/checkoutDraft";

export async function POST(request: Request) {

    const origin = request.headers.get("origin")
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

        console.log(`Draft from checkoput route: ${draft.data}`)

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
            `${origin}/checkout/success`,

        cancel_url:
            `${origin}/checkout/cancel`,
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