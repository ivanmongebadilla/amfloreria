import { Order } from "./Order";
import { OrderItem } from "./OrderItem";

export interface OrderWithItems extends Order{
    order_items: OrderItem[];
}