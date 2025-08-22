export default function Loading() {
    return (
        <div className="space-y-3" aria-live="polite">
            <div className="h-6 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
    );
}
