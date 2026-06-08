import { getAllOrders } from "@/src/actions/orders/getAllOrders";
import OrderPage from "@/src/features/orders/OrderPage";

export const dynamic = "force-dynamic";

export default async function Orders() {

    const orders = await getAllOrders()

    return(
        <OrderPage orders={orders}/>
    )
}