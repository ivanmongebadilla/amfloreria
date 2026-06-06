import { supabaseAdmin } from "@/src/lib/server_supabase";

export async function getAllOrders(){
    const { data, error } = await supabaseAdmin
        .from("orders")
        .select(`
            *,
            order_items (*)
        `)
        .order("created_at", {
            ascending: false,
        });

    if (error) {
        throw error;
    }

    return data;
}