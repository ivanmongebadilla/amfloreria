import { stripe } from "@/src/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        const { items } = await request.json();

        const session = await stripe.checkout.sessions.create({
        mode: "payment",

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