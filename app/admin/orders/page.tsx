import Link from "next/link";
import { mockOrders } from "@/src/data/orderitemstest";
import { OrderSection } from "@/src/components/admin/OrderSection";
import { OrdersStats } from "@/src/components/admin/OrderStats";
import { getAllOrders } from "@/src/actions/orders/getAllOrders";
import OrderPage from "@/src/features/orders/OrderPage";

export const dynamic = "force-dynamic";

export default async function Orders() {

    const orders = await getAllOrders()

    return(
        <OrderPage orders={orders}/>
    )
}