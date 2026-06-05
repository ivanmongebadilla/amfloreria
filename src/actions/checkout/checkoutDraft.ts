import { supabaseAdmin } from "@/src/lib/server_supabase";
import { CreateCheckoutDraftInput } from "@/src/types/CheckoutDraft";

export async function createCheckoutDraft(checkout_data: CreateCheckoutDraftInput){
    const { data, error } = await supabaseAdmin
        .from('checkout_drafts')
        .insert(checkout_data)
        .select()
        .single()

    if (error) {
        throw error;
    }

    return {success: true, data: data}
}

export async function updateCheckoutDraft(draftId: string, stripeSessionId: string) {
    const { data, error } = await supabaseAdmin
        .from("checkout_drafts")
        .update({
            stripe_session_id: stripeSessionId,
        })
        .eq("id", draftId)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return ({success: true, data: data})
}