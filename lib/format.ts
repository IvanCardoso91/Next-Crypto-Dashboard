export const nfUSD = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 2,
});
export const nfINT = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

export const fmtUsd = (n: number) => nfUSD.format(n);
export const fmtInt = (n: number) => nfINT.format(n);

export const fmtDate = (ts: number) =>
    new Date(ts).toISOString().slice(0, 10);
