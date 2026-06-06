interface OrderStatCardProps {
    label: string;
    value: number;
}

export function OrderStatCard({
    label,
    value,
}: OrderStatCardProps) {
    return (
        <div>
            <p className="text-sm text-neutral-500">
                {label}
            </p>

            <p className="mt-1 text-2xl font-light">
                {value}
            </p>
        </div>
    );
}