import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Providers from "./providers";
import ThemeToggle from "@/app/components/theme-toggle";

export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Top 20, busca e detalhes com gráfico (7d)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
        <Providers>
          <header className="border-b border-zinc-200 dark:border-zinc-800">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <Link href="/">
                <h1 className="text-lg font-semibold">Crypto Dashboard</h1>
              </Link>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
