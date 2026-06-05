export interface Order{
    id: string;
    stripe_session_id: string;
    customer_name: string;
    customer_phone: string;
    customer_address: string;
    total: number;
    subtotal: number;
    order_status: string;
    delivery_date: string;
    delivery_time: string;
    delivery_instructions: string;
    card_message: string;
    payment_status: string;
    // created_at: string;
}