'use client';
import { useState } from 'react';

export default function SearchBox() {
    const [q, setQ] = useState('');
    return (
        <label className="flex items-center gap-2">
            <span className="sr-only">Buscar moeda</span>
            <input
                value={q}
                onChange={(e) => {
                    setQ(e.target.value);
                    const ev = new CustomEvent('search:query', { detail: e.target.value });
                    window.dispatchEvent(ev);
                }}
                placeholder="Buscar moeda..."
                aria-label="Buscar moeda por nome ou símbolo"
                className="rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
            />
        </label>
    );
}
