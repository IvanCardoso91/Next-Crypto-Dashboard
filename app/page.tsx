import { fetchTop20 } from "@/lib/coingecko";
import CoinTable from "@/app/components/coin-table";
import SearchBox from "@/app/components/search-box";

export default async function Home() {
  const coins = await fetchTop20();
  return (
    <section aria-labelledby="list-heading">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="list-heading" className="text-xl font-semibold">Top 20 por Market Cap</h2>
        <SearchBox />
      </div>
      <CoinTable initialCoins={coins} />
    </section>
  );
}