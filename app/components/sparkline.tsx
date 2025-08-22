'use client';

import { useEffect, useState } from 'react';
import {
    ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { fmtDate } from '@/lib/format';

// Formato que o Recharts vai consumir
type Point = { time: string; value: number };

export default function Sparkline({ id }: { id: string }) {
    const [data, setData] = useState<Point[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let alive = true;
        (async () => {
            try {
                const response = await fetch(`/api/market-chart/${id}`);
                if (!response.ok) throw new Error(String(response.status));
                const { prices } = await response.json();
                if (!alive) return;

                const points: Point[] = (prices ?? []).map((price: [number, number]) => ({
                    time: fmtDate(price[0]),
                    value: price[1],
                }));

                if (!points.length) throw new Error('no-data');
                setData(points);
            } catch {
                setError('Não foi possível carregar o gráfico.');
            }
        })();

        return () => {
            alive = false;
        };
    }, [id]);

    if (error) return <p role="alert" className="text-sm text-rose-600">{error}</p>;
    if (!data) return <p aria-live="polite">Carregando gráfico…</p>;

    return (
        <div className="h-56 text-emerald-400 dark:text-emerald-400">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                    {/* Grid suave para contraste */}
                    <CartesianGrid stroke="currentColor" strokeOpacity={0.08} />

                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={['dataMin', 'dataMax']} />

                    <Tooltip
                        formatter={(value: number) => [`$${value.toLocaleString('en-US')}`, 'Preço']}
                        labelFormatter={(label) => label}
                        contentStyle={{ background: 'rgba(0,0,0,0.6)', border: 'none' }}
                    />

                    <defs>
                        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="currentColor" stopOpacity={0.08} />
                        </linearGradient>
                    </defs>

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeOpacity={0.95}
                        fill="url(#g)"
                        fillOpacity={1}
                        dot={false}
                        isAnimationActive={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
