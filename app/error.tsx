'use client';
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
    return (
        <div role="alert" className="space-y-3">
            <h2 className="text-lg font-semibold">Ops! Algo deu errado.</h2>
            <p className="opacity-80">{error.message}</p>
            <button
                onClick={() => reset()}
                className="rounded border border-zinc-300 dark:border-zinc-700 px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
                Tentar novamente
            </button>
        </div>
    );
}
