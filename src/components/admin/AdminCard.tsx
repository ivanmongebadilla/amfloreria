import Link from "next/link";

interface AdminCardProps {
  title: string;
  description: string;
  href: string;
}

export default function AdminCard({
  title,
  description,
  href,
}: AdminCardProps) {
  return (
    <Link
      href={href}
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1"
    >
      <h2 className="text-lg font-medium">
        {title}
      </h2>

      <p className="mt-2 text-sm text-neutral-500">
        {description}
      </p>
    </Link>
  );
}