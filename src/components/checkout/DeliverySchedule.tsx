export function DeliverySchedule () {
    const today = new Date().toISOString().split("T")[0];
    return (
        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <h2 className="text-lg font-medium">Fecha de Entrega</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input
              type="date"
              min={today}
              className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            />

            <select className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black">
              <option>9:00 AM - 12:00 PM</option>
              <option>12:00 PM - 3:00 PM</option>
              <option>3:00 PM - 6:00 PM</option>
            </select>
          </div>
        </div>
    )
}