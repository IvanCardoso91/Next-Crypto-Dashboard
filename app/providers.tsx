'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { SWRConfig } from 'swr';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            <SWRConfig value={{
                fetcher: (url: string) => fetch(url).then(r => {
                    if (!r.ok) throw new Error('Network error');
                    return r.json();
                })
            }}>
                {children}
            </SWRConfig>
        </NextThemesProvider>
    );
}
