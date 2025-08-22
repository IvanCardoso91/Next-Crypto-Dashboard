import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',
    timeout: 60_000,
    expect: { timeout: 10_000 },
    retries: 1,
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        video: 'retain-on-failure',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    ],
    webServer: {
        command: 'pnpm build && pnpm start -p 3000',
        port: 3000,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
    },
});
