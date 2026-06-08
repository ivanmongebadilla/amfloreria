export default function Loading() {
    return (
        <main className="min-h-screen bg-[var(--background)] px-4 py-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 h-10 w-48 animate-pulse rounded bg-neutral-200" />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-neutral-200 bg-white p-4"
                        >
                            <div className="aspect-square animate-pulse rounded-2xl bg-neutral-200" />

                            <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-neutral-200" />

                            <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-neutral-200" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}