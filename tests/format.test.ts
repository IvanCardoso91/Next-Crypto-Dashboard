import { fmtUsd, fmtInt, fmtDate } from '@/lib/format';

test('fmtUsd formata USD fixo', () => {
    expect(fmtUsd(1234.56)).toBe('$1,234.56');
});

test('fmtInt formata inteiros en-US', () => {
    expect(fmtInt(1234567)).toBe('1,234,567');
});

test('fmtDate retorna yyyy-mm-dd', () => {
    const ts = Date.UTC(2025, 0, 15);
    expect(fmtDate(ts)).toBe('2025-01-15');
});
