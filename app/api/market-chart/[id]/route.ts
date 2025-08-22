import { NextResponse } from 'next/server';
import { fetchMarketChart7d } from '@/lib/coingecko';


export async function GET(
    _req: Request,
    ctx: { params: Promise<{ id: string }> }
) {
    const { id } = await ctx.params;
    try {
        const data = await fetchMarketChart7d(id);
        console.log("data", data)
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=600',
            },
        });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'fetch_failed';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
