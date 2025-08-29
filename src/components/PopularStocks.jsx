
const popularStocks = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "TSLA", name: "Tesla Inc." },
  { symbol: "MSFT", name: "Microsoft Corp." },
  { symbol: "AMZN", name: "Amazon.com Inc." },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "FB", name: "Meta Platforms Inc." },
  { symbol: "NFLX", name: "Netflix Inc." },
  { symbol: "NVDA", name: "NVIDIA Corporation" },
  { symbol: "BABA", name: "Alibaba Group Holding Limited" },
  { symbol: "JPM", name: "JPMorgan Chase & Co." },
  { symbol: "V", name: "Visa Inc." },
  { symbol: "DIS", name: "The Walt Disney Company" },
  { symbol: "PYPL", name: "PayPal Holdings Inc." },
  { symbol: "INTC", name: "Intel Corporation" },
  { symbol: "CSCO", name: "Cisco Systems, Inc." },
  { symbol: "ADBE", name: "Adobe Inc." },
  { symbol: "CRM", name: "Salesforce, Inc." },
  { symbol: "ORCL", name: "Oracle Corporation" },
  { symbol: "T", name: "AT&T Inc." },
  { symbol: "KO", name: "The Coca-Cola Company" },
];

export default function PopularStocks({ onSelect }) {
  return (
    <div className="my-8 max-w-4xl mx-auto p-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-xl shadow-lg">
      <h3 className="mb-4 font-bold text-lg text-indigo-700 text-center tracking-wide">
        Explore Popular Stocks
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {popularStocks.map(({ symbol, name }) => (
          <button
            key={symbol}
            onClick={() => onSelect(symbol)}
            className="px-4 py-2 bg-white/90 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white shadow transition rounded-full border border-indigo-100 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            <span className="text-indigo-700 font-bold">{symbol}</span>
            <span className="mx-1 text-gray-400">—</span>
            <span className="text-gray-700">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
