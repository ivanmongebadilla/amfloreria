"use client";
import { Navbar } from "@/src/components/shared/Navbar";
import { CheckoutForm } from "@/src/components/checkout/CheckoutForm";
import CheckoutFormData from "@/src/types/checkoutform";
import { DeliverySchedule } from "@/src/components/checkout/DeliverySchedule";
import { useState } from "react";
import OrderSummary from "@/src/components/checkout/OrderSummary";
import { useCartStore } from "@/src/store/cartStore";
import Link from "next/link";
import { Footer } from "@/src/components/shared/Footer";

export default function CheckoutPage() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);

    const [formData, setFormData] = useState<CheckoutFormData>({
        fullName: "",
        phone: "",
        address: "",
        deliveryInstructions: "",
        cardMessage: ""
    })
    const [deliveryDate, setDeliveryDate] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");

    const isFormValid =
        formData.fullName.trim() !== "" &&
        formData.phone.trim() !== "" &&
        formData.address.trim() !== "" &&
        formData.cardMessage.trim() !== "" &&
        deliveryDate !== "" &&
        deliveryTime !== "";

    const canCheckout = items.length > 0 && isFormValid;

    async function handleCheckout() {
        const response = await fetch(
            "/api/checkout",
            {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
                items,
            }),
            }
        );

        const data = await response.json();

        window.location.href = data.url;
    }

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
            <Navbar showShopLink={false}/>

            <div>
                <Link
                    href="/shop"
                    className="inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-5 py-3 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-[var(--blush)]/40 sm:text-xs"
                >
                    ← Volver a Shop
                </Link>
            </div>
            
            <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
                <section id="checkout" className="space-y-10">
                    <div className="space-y-4 text-center">
                        <h1 className="mt-2 text-3xl font-light tracking-tight">
                            Checkout
                        </h1>
                        <p className="mt-2 text-sm text-neutral-500">
                            Finaliza tu pedido y agenda la entrega de tus flores.
                        </p>
                    </div>
                </section>

                <section id="checkoutform">
                    <CheckoutForm formData={formData} setFormData={setFormData}/>
                </section>

                <section id="deliveryschedule">
                    <DeliverySchedule 
                        deliveryDate={deliveryDate}
                        deliveryTime={deliveryTime}
                        setDeliveryDate={setDeliveryDate}
                        setDeliveryTime={setDeliveryTime}/>
                </section>

                <OrderSummary items={items} onRemove={removeItem}/>
                <button className="w-full rounded-md bg-black px-4 py-3 text-white transition disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500" 
                    onClick={handleCheckout} 
                    disabled={!canCheckout}
                >
                    Continuar
                </button>

            </div>
            <Footer/>
        </div>
    </main>
  );
}
