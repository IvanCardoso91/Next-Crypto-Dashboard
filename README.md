# 🪙 Next Crypto Dashboard

Aplicação desenvolvida em **Next.js 15 + TypeScript** que consome a API da [CoinGecko](https://www.coingecko.com/api/documentation) para exibir as **20 maiores criptomoedas por market cap**, com busca e detalhes (incluindo gráfico de 7 dias).

👉 Deploy em produção: [https://next-crypto-dashboard-eta.vercel.app](https://next-crypto-dashboard-eta.vercel.app)

---

## 🚀 Tecnologias

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [SWR](https://swr.vercel.app/) para cache client-side
- [Recharts](https://recharts.org/) para visualização gráfica
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) para testes unitários
- [Playwright](https://playwright.dev/) para testes E2E
- [Docker](https://www.docker.com/) para containerização
- Deploy via [Vercel](https://vercel.com/)

---

## ✨ Funcionalidades

- 📊 **Listagem das Top 20 criptomoedas** por market cap  
- 🔍 **Busca em tempo real** por nome ou símbolo  
- 📈 **Página de detalhes da moeda**, com gráfico de variação em 7 dias  
- ⚡ **SSR + CSR combinados**: páginas de listagem/detalhes com cache e SWR no client  
- 🛡️ **Error Boundaries** e loading states  
- 📱 **Layout responsivo**  
- ✅ **Testes unitários e E2E** configurados  
- 🔑 Suporte a **API Key da CoinGecko** via `CG_API_KEY`  

---

## 📂 Estrutura

```
app/
 ├─ page.tsx                # Dashboard (Top 20)
 ├─ coin/[id]/page.tsx      # Detalhes da moeda
 ├─ api/market-chart/[id]/  # Proxy server-side para gráfico
 ├─ components/             # Componentes compartilhados
lib/
 ├─ coingecko.ts            # Client para API CoinGecko
 ├─ format.ts               # Helpers de formatação
types/
 ├─ coin.ts                 # Tipos de moedas/market chart
tests/                      # Testes unitários (Jest)
e2e/                        # Testes end-to-end (Playwright)
```

---

## 🧑‍💻 Como rodar localmente

### 1. Clonar repositório
```bash
git clone https://github.com/seuuser/next-crypto-dashboard.git
cd next-crypto-dashboard
```

### 2. Instalar dependências
```bash
pnpm install
```

### 3. Configurar variáveis de ambiente
Crie `.env.local` na raiz:
```bash
CG_API_KEY=coloque_sua_chave_da_coingecko
```

### 4. Rodar em dev
```bash
pnpm dev
```
Acesse [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testes

### Unitários (Jest)
```bash
pnpm test
```

### End-to-End (Playwright)
```bash
pnpm e2e
# ou interface interativa
pnpm e2e:ui
```

---

## 🐳 Docker

Buildar e rodar container:
```bash
docker build -t crypto-dashboard .
docker run -p 3000:3000 crypto-dashboard
```

---

## ⚙️ CI/CD

- **GitHub Actions**: roda unit + e2e + build a cada PR/push  
- **Vercel**: deploy automático em Preview (PR) e Production (main/master)  
- **Secrets**: `CG_API_KEY` configurada no GitHub e Vercel  

---

## 🌐 Deploy

Aplicação está rodando em:  
👉 [https://next-crypto-dashboard-eta.vercel.app](https://next-crypto-dashboard-eta.vercel.app)

---

## 📸 Screenshots

### Dashboard
![Dashboard](./public/screenshot-dashboard.png)

### Detalhes
![Detalhes](./public/screenshot-coin.png)

---

## 📜 Licença
MIT — fique à vontade para usar e modificar.
