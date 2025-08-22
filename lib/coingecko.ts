const BASE = 'https://api.coingecko.com/api/v3';

const CG_KEY = process.env.CG_API_KEY;

function cgHeaders(): HeadersInit {
    if (!CG_KEY) return {};
    return {
        'x-cg-demo-api-key': CG_KEY,
        'x-cg-pro-api-key': CG_KEY,
    };
}

async function getJSON<T>(url: string, init?: RequestInit): Promise<T> {
    const res = await fetch(url, {
        ...init,
        headers: { ...(init?.headers || {}), ...cgHeaders() },
    });
    if (!res.ok) throw new Error(`CoinGecko ${res.status}`);
    return res.json() as Promise<T>;
}

export async function fetchTop20() {
    return getJSON<import('@/types/coin').CoinMarket[]>(
        `${BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`,
        { next: { revalidate: 60 } }
    );
}

export async function fetchCoin(id: string) {
    return getJSON<any>(`${BASE}/coins/${id}`, { next: { revalidate: 60 } });
}

export async function fetchMarketChart7d(id: string) {
    console.log('CG2', getJSON<import('@/types/coin').MarketChart>(
        `${BASE}/coins/${id}/market_chart?vs_currency=usd&days=7`,
        { next: { revalidate: 60 } }
    ))
    return getJSON<import('@/types/coin').MarketChart>(
        `${BASE}/coins/${id}/market_chart?vs_currency=usd&days=7`,
        { next: { revalidate: 60 } }
    );
}
