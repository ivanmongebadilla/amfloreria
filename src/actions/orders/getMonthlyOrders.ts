import { supabaseAdmin } from "@/src/lib/server_supabase";

export async function getMonthlyOrders() {
    const firstDayOfMonth = new Date();
        firstDayOfMonth.setDate(1);
        firstDayOfMonth.setHours(0, 0, 0, 0);

    const { data, error } = await supabaseAdmin
        .from("orders")
        .select("total")
        .eq("payment_status", "paid")
        .gte(
            "created_at",
            firstDayOfMonth.toISOString()
        );

    if (error) {
        throw error
    }

    const monthlySales =
        data.reduce(
            (sum, order) => sum + order.total,
            0
        );

    return ({success: true, data: monthlySales})
}