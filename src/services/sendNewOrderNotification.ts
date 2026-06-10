import { Order } from "../types/Order";
import { sendNotification } from "./sendNotification";

export async function sendNewOrderNotification(
  order: Order
) {
  await sendNotification(
    "🌷 Nueva Orden",
    `${order.customer_name} - $${order.total}`
  );
}