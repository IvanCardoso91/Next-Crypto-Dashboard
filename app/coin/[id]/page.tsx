import { fetchCoin } from "@/lib/coingecko";
import Sparkline from "@/app/components/sparkline";
import { fmtUsd } from '@/lib/format';

export default async function CoinPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const coin = await fetchCoin(id);

    return (
        <section className="space-y-6">
            <header className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coin.image.small} alt="" className="h-6 w-6" />
                <h2 className="text-xl font-semibold">{coin.name} <span className="uppercase text-sm opacity-70">({coin.symbol})</span></h2>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded border border-zinc-200 dark:border-zinc-800 p-4">
                    <h3 className="mb-3 font-medium">Preço (7 dias)</h3>
                    <Sparkline id={coin.id} />
                </div>

                <dl className="rounded border border-zinc-200 dark:border-zinc-800 p-4">
                    <div className="flex justify-between py-2">
                        <dt className="opacity-70">Preço atual</dt>
                        <dd>${fmtUsd(coin.market_data.current_price.usd)}</dd>
                    </div>
                    <div className="flex justify-between py-2">
                        <dt className="opacity-70">Market Cap</dt>
                        <dd>${fmtUsd(coin.market_data.market_cap.usd)}</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
