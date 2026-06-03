"use client";
import CheckoutFormData from "@/src/types/checkoutform"

type CheckoutFormProps = {
  formData: CheckoutFormData;
  setFormData: React.Dispatch<
    React.SetStateAction<CheckoutFormData>
  >;
};

export function CheckoutForm ({ formData, setFormData,}: CheckoutFormProps) {
    
    const handleChange = (
            e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
            >
        ) => {
            const { name, value } = e.target;

            setFormData((prev) => ({
            ...prev,
            [name]: value,
            }));
        };

    return (
        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-medium">Informacion de Entrega</h2>

            <div className="mt-5 grid gap-4">
                <input
                type="text"
                name="fullName"
                placeholder="Nombre completo (requerido)"
                value={formData.fullName}
                onChange={handleChange}
                className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
                />

                <input
                type="tel"
                placeholder="Teléfono (requerido)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
                />

                <input
                type="text"
                placeholder="Dirección de entrega (requerido)"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
                />

                <textarea
                placeholder="Instrucciones de entrega"
                rows={4}
                name="deliveryInstructions"
                value={formData.deliveryInstructions}
                onChange={handleChange}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                />

                <textarea
                placeholder="Mensaje de tarjeta (requerido)"
                rows={4}
                name="cardMessage"
                value={formData.cardMessage}
                onChange={handleChange}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                />
            </div>
        </div>
    )
}