'use client';
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CoinMarket } from "@/types/coin";
import { fmtUsd } from '@/lib/format';

export default function CoinTable({ initialCoins }: { initialCoins: CoinMarket[] }) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const handler = (e: Event) => {
            const d = (e as CustomEvent<string>).detail ?? "";
            setQuery(String(d).toLowerCase());
        };
        window.addEventListener('search:query', handler as EventListener);
        return () => window.removeEventListener('search:query', handler as EventListener);
    }, []);

    const coins = useMemo(() => {
        if (!query) return initialCoins;
        return initialCoins.filter(coin =>
            coin.name.toLowerCase().includes(query) || coin.symbol.toLowerCase().includes(query)
        );
    }, [initialCoins, query]);

    if (!coins.length) {
        return <p role="status" aria-live="polite" className="text-sm opacity-80">Nenhuma moeda encontrada.</p>;
    }

    return (
        <div className="overflow-x-auto rounded border border-zinc-200 dark:border-zinc-800">
            <table className="min-w-full text-sm">
                <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                    <tr>
                        <th className="px-3 py-2 text-left">#</th>
                        <th className="px-3 py-2 text-left">Moeda</th>
                        <th className="px-3 py-2 text-right">Preço</th>
                        <th className="px-3 py-2 text-right">Market Cap</th>
                        <th className="px-3 py-2 text-right">24h</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => (
                        <tr key={coin.id} className="border-t border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50/60 dark:hover:bg-zinc-800/30">
                            <td className="px-3 py-2">{index + 1}</td>
                            <td className="px-3 py-2">
                                <Link href={`/coin/${coin.id}`} className="inline-flex items-center gap-2 hover:underline">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={coin.image} alt="" className="h-5 w-5 rounded-full" />
                                    <span className="font-medium">{coin.name}</span>
                                    <span className="uppercase text-xs opacity-70">({coin.symbol})</span>
                                </Link>
                            </td>
                            <td className="px-3 py-2 text-right">${fmtUsd(coin.current_price)}</td>
                            <td className="px-3 py-2 text-right">${fmtUsd(coin.market_cap)}</td>
                            <td className={`px-3 py-2 text-right ${Number(coin.price_change_percentage_24h) >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {coin.price_change_percentage_24h?.toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
