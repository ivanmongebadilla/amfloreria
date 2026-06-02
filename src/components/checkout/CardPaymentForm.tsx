"use client";

import { useState } from "react";

export default function CardPaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    // <div className="mx-auto w-full max-w-md rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <h2 className="mb-6 text-xl font-semibold">Detalles de Pago</h2>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Nombre Completo</label>
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            className="w-full rounded-md border p-3"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Numero de Tarjeta</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full rounded-md border p-3"
            placeholder="4242 4242 4242 4242"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Expiracion</label>
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full rounded-md border p-3"
              placeholder="MM/YY"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full rounded-md border p-3"
              placeholder="123"
            />
          </div>
        </div>

        <button className="w-full rounded-md bg-black px-4 py-3 text-white">
          Pay Now
        </button>
      </div>
    </div>
  );
}
