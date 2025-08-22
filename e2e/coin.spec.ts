import { test, expect } from '@playwright/test';

test('página de moeda mostra gráfico (mock)', async ({ page }) => {
    await page.route('/api/market-chart/*', async (route) => {
        const now = Date.now();
        const prices = Array.from({ length: 50 }, (_, i) => [now - (50 - i) * 3600_000, 100 + i]);
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ prices, market_caps: [], total_volumes: [] }),
        });
    });

    await page.goto('/coin/bitcoin');

    await expect(page.getByRole('heading', { name: /bitcoin/i })).toBeVisible();
    await expect(page.getByText(/carregando gráfico/i)).toBeHidden({ timeout: 10_000 });

    await expect(page.locator('svg')).toBeVisible();
});
