import { OrderWithItems } from "../types/OrderWithItems";

export const mockOrders: OrderWithItems[] = [
    {
        id: "order_001",

        stripe_session_id:
            "cs_test_123456",

        customer_name:
            "Ivan Monge Badilla",

        customer_phone:
            "6371226999",

        customer_address:
            "1829 N Saint Francis Pl",

        delivery_date:
            "2026-06-10",

        delivery_time:
            "9:00 AM - 12:00 PM",

        delivery_instructions:
            "Tocar el timbre al llegar",

        card_message:
            "Feliz cumpleaños ❤️",

        subtotal: 1800,
        total: 1800,

        payment_status: "paid",

        order_status: "pending",

        // created_at:
        //     "2026-06-05T18:00:00Z",

        items: [
            {
                id: "item_001",

                order_id:
                    "order_001",

                product_id:
                    "product_001",

                product_title:
                    "Ramo Pasión",

                quantity: 1,

                unit_price: 1000,

                line_total: 1000,
            },
            {
                id: "item_002",

                order_id:
                    "order_001",

                product_id:
                    "product_002",

                product_title:
                    "Bouquet Premium Rosas",

                quantity: 1,

                unit_price: 800,

                line_total: 800,
            },
        ],
    },

    {
        id: "order_002",

        stripe_session_id:
            "cs_test_654321",

        customer_name:
            "María López",

        customer_phone:
            "6621234567",

        customer_address:
            "Caborca, Sonora",

        delivery_date:
            "2026-06-11",

        delivery_time:
            "12:00 PM - 3:00 PM",

        delivery_instructions:
            "",

        card_message:
            "Te quiero mucho",

        subtotal: 1500,
        total: 1500,

        payment_status: "paid",

        order_status:
            "preparing",

        // created_at:
        //     "2026-06-05T19:15:00Z",

        items: [
            {
                id: "item_003",

                order_id:
                    "order_002",

                product_id:
                    "product_003",

                product_title:
                    "Flower Box Elegance",

                quantity: 1,

                unit_price: 1500,

                line_total: 1500,
            },
        ],
    },

    {
        id: "order_003",

        stripe_session_id:
            "cs_test_987654",

        customer_name:
            "Carlos Hernández",

        customer_phone:
            "6389876543",

        customer_address:
            "Puerto Peñasco, Sonora",

        delivery_date:
            "2026-06-12",

        delivery_time:
            "3:00 PM - 6:00 PM",

        delivery_instructions:
            "Casa color azul",

        card_message:
            "Gracias por todo",

        subtotal: 3000,
        total: 3000,

        payment_status: "paid",

        order_status:
            "out_for_delivery",

        // created_at:
        //     "2026-06-05T20:00:00Z",

        items: [
            {
                id: "item_004",

                order_id:
                    "order_003",

                product_id:
                    "product_004",

                product_title:
                    "Bouquet Personalizado",

                quantity: 2,

                unit_price: 1200,

                line_total: 2400,
            },
            {
                id: "item_005",

                order_id:
                    "order_003",

                product_id:
                    "product_005",

                product_title:
                    "Ramo Express Primavera",

                quantity: 1,

                unit_price: 600,

                line_total: 600,
            },
        ],
    },
];