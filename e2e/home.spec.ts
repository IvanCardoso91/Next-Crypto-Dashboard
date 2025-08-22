import { test, expect } from '@playwright/test';

test('lista top 20 e busca funciona', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /top 20/i })).toBeVisible();

    const rows = page.locator('table tbody tr');
    await expect(rows).toHaveCount(20);

    const input = page.getByRole('textbox', { name: /buscar moeda/i });
    await input.fill('bit');
    await expect(rows).toHaveCountGreaterThan(0);

    const firstLink = rows.nth(0).getByRole('link');
    const href = await firstLink.getAttribute('href');
    await firstLink.click();
    await expect(page).toHaveURL(href!);
});
