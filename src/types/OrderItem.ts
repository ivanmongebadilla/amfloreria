export interface OrderItem {
    id: string;
    order_id: string;
    product_id: string;
    product_title: string;
    quantity: number;
    unit_price: number;
    line_total: number;
}