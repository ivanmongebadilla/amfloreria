import CartItem from "./cart";

export interface CreateCheckoutDraftInput {
    // stripe_session_id: string;

    customer_name: string;
    customer_phone: string;
    customer_address: string;

    delivery_date: string;
    delivery_time: string;

    delivery_instructions?: string;
    card_message: string;

    cart: CartItem[];
}