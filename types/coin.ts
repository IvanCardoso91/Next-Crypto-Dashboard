// types/coin.ts
export interface CoinMarket {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number | null;
}

export interface MarketChart {
    prices: [number, number][];
}

export interface CoinDetail {
    id: string;
    symbol: string;
    name: string;
    image: {
        small: string;
        thumb?: string;
        large?: string;
    };
    market_data: {
        current_price: { usd: number };
        market_cap: { usd: number };
    };
}
