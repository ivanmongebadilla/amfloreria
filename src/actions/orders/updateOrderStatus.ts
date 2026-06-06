"use server"
import { supabaseAdmin } from "@/src/lib/server_supabase";

export async function updateOrderStatus(orderId: string, status: string){
    const { data, error } = await supabaseAdmin
        .from('orders')
        .update({order_status: status})
        .eq('id', orderId)
        .select()
        .single()

    if (error) {
        throw error
    }

    return ({success: true, data: data})
}