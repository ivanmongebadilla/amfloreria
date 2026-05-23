"use client";
import { Navbar } from "@/src/components/shared/Navbar";
import { CheckoutForm } from "@/src/components/checkout/CheckoutForm";
import CheckoutFormData from "@/src/types/checkoutform";
import { DeliverySchedule } from "@/src/components/checkout/DeliverySchedule";
import { useState } from "react";
import OrderSummary from "@/src/components/checkout/OrderSummary";
import { useCartStore } from "@/src/store/cartStore";

// const orderItems = [
//   {
//     id: 1,
//     title: "Ramo Rosas Blancas",
//     quantity: 1,
//     price: 1200,
//   },
//   {
//     id: 2,
//     title: "Tulipanes Rosas",
//     quantity: 2,
//     price: 850,
//   },
// ];

// const subtotal = orderItems.reduce(
//   (acc, item) => acc + item.price * item.quantity,
//   0
// );

// const deliveryFee = 150;
// const total = subtotal + deliveryFee;

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


  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <section className="relative overflow-hidden px-4 py-6 sm:px-6 md:px-12 lg:px-20">
            <div className="mx-auto flex max-w-7xl flex-col gap-16 md:gap-24">
              <Navbar showShopLink={false}/>
            </div>
        </section>
        
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
                <DeliverySchedule/>
            </section>

            <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <h2 className="text-lg font-medium">Mensaje de Tarjeta</h2>

                <textarea
                    placeholder="Escribe un mensaje especial para la tarjeta"
                    rows={5}
                    className="mt-5 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                />
            </section>

            <OrderSummary items={items} onRemove={removeItem}/>

        </div>

    </main>

    // <main className="min-h-screen bg-[#faf7f5] px-4 py-6 text-[#1f1f1f]">
    //   <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">


    //     <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
    //       <div className="flex items-center justify-between">
    //         <h2 className="text-lg font-medium">Order summary</h2>

    //         <span className="text-sm text-neutral-500">
    //           {orderItems.length} productos
    //         </span>
    //       </div>

    //       <div className="mt-5 space-y-4">
    //         {orderItems.map((item) => (
    //           <div
    //             key={item.id}
    //             className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4"
    //           >
    //             <div>
    //               <p className="text-sm font-medium">{item.title}</p>

    //               <p className="mt-1 text-xs text-neutral-500">
    //                 Cantidad: {item.quantity}
    //               </p>
    //             </div>

    //             <p className="text-sm font-medium">
    //               ${item.price * item.quantity}
    //             </p>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="mt-6 space-y-3 border-t border-neutral-100 pt-5 text-sm">
    //         <div className="flex items-center justify-between text-neutral-500">
    //           <span>Subtotal</span>
    //           <span>${subtotal}</span>
    //         </div>

    //         <div className="flex items-center justify-between text-neutral-500">
    //           <span>Entrega</span>
    //           <span>${deliveryFee}</span>
    //         </div>

    //         <div className="flex items-center justify-between text-base font-semibold">
    //           <span>Total</span>
    //           <span>${total}</span>
    //         </div>
    //       </div>
    //     </section>

    //     <button className="h-14 rounded-2xl bg-black text-sm font-medium text-white transition hover:opacity-90">
    //       Proceed to payment
    //     </button>
    //   </div>
    // </main>
  );
}
