const staticBalances = { usd: 2000, btc: 1.2345, btcPrice: 42000 };

export default function TopRibbon() {
  return (
    <div className="flex flex-row gap-2 w-full justify-between items-center">
      <span className="font-semibold">USD: ${staticBalances.usd}</span>
      <span className="font-semibold">BTC: {staticBalances.btc}</span>
      <span className="font-semibold">
        BTC Price: ${staticBalances.btcPrice}
      </span>
    </div>
  );
}
