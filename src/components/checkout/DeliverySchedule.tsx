interface DeliveryScheduleProps{
    deliveryDate: string;
    deliveryTime: string;
    setDeliveryDate: (date: string) => void;
    setDeliveryTime: (time: string) => void;    
}

export function DeliverySchedule ({deliveryDate, deliveryTime, setDeliveryDate, setDeliveryTime}: DeliveryScheduleProps) {
    const today = new Date().toISOString().split("T")[0];
    return (
        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <h2 className="text-lg font-medium">Fecha de Entrega</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input
              type="date"
              min={today}
              value={deliveryDate}
              onChange={(e) =>
                  setDeliveryDate(e.target.value)
              }
              className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            />

            <select
              value={deliveryTime}
              onChange={(e) =>
                  setDeliveryTime(e.target.value)
              } 
              className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black">
              <option value="">
                  Selecciona un horario
              </option>

              <option value="9:00 AM - 12:00 PM">
                  9:00 AM - 12:00 PM
              </option>

              <option value="12:00 PM - 3:00 PM">
                  12:00 PM - 3:00 PM
              </option>

              <option value="3:00 PM - 6:00 PM">
                  3:00 PM - 6:00 PM
              </option>
            </select>
          </div>
        </div>
    )
}