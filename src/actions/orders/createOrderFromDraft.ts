import { supabaseAdmin } from "@/src/lib/server_supabase";

export async function createOrderFromDraft(checkoutDraftId: string) {
    // Buscar draft
    const {data: draft, error: draftError} = await supabaseAdmin
        .from("checkout_drafts")
        .select("*")
        .eq("id", checkoutDraftId)
        .single();

    if (draftError || !draft) {
        console.log(draftError)
        throw new Error(
            `Checkout draft not found: ${checkoutDraftId}`
        );
    }

    // Idempotencia
    const {data: existingOrder, error: existingOrderError} = await supabaseAdmin
        .from("orders")
        .select("id")
        .eq(
            "stripe_session_id",
            draft.stripe_session_id
        )
        .maybeSingle();

    if (existingOrderError) {
        throw existingOrderError;
    }

    // Si ya existe una orden para esta sesión
    // terminamos aquí
    if (existingOrder) {
        return existingOrder;
    }

    const subtotal = draft.cart.reduce(
        (
            sum: number,
            item: {
                price: number;
                quantity: number;
            }
        ) => {
            return sum + item.price * item.quantity;
        },
        0
    );

    const total = subtotal;

    const {data: order, error: orderError,} = await supabaseAdmin
        .from("orders")
        .insert({
            stripe_session_id: draft.stripe_session_id,
            customer_name: draft.customer_name,
            customer_phone: draft.customer_phone,
            customer_address: draft.customer_address,
            delivery_date: draft.delivery_date,
            delivery_time: draft.delivery_time,
            delivery_instructions: draft.delivery_instructions,
            card_message: draft.card_message,
            subtotal,
            total,
            payment_status: "paid",
            order_status: "pending",
        })
        .select()
        .single();

    if (orderError || !order) {
        throw new Error(
            "Failed to create order"
        );
    }

    const orderItems = draft.cart.map(
        (
            item: {
                id: string;
                title: string;
                price: number;
                quantity: number;
            }
        ) => ({
            order_id: order.id,
            product_id: item.id,
            product_title: item.title,
            quantity: item.quantity,
            unit_price: item.price,
            line_total:
                item.price * item.quantity,
        })
    );

    const {error: orderItemsError,} = await supabaseAdmin
        .from("order_items")
        .insert(orderItems);

    if (orderItemsError) {
        throw orderItemsError;
    }

    const { error: deleteDraftError } = await supabaseAdmin
            .from("checkout_drafts")
            .delete()
            .eq("id", checkoutDraftId);

    if (deleteDraftError) {
        throw deleteDraftError;
    }

    return order;
}