
import { 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon, 
  ChartBarIcon, 
  CubeTransparentIcon 
} from '@heroicons/react/24/solid';



export default function StockInfo({ data }) {
  if (!data) {
    return null;
  }

  const { open, high, low, close, volume, date } = data;

  const infoItems = [
    { label: "Open", value: open.toFixed(2), icon: <CurrencyDollarIcon className="h-6 w-6 text-indigo-500" /> },
    { label: "High", value: high.toFixed(2), icon: <ArrowTrendingUpIcon className="h-6 w-6 text-green-500" /> },
    { label: "Low", value: low.toFixed(2), icon: <ArrowTrendingDownIcon className="h-6 w-6 text-red-500" /> },
    { label: "Close", value: close.toFixed(2), icon: <ChartBarIcon className="h-6 w-6 text-purple-500" /> },
    { label: "Volume", value: volume.toLocaleString(), icon: <CubeTransparentIcon className="h-6 w-6 text-yellow-500" /> },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 max-w-4xl mx-auto border border-indigo-100">
      <h3 className="text-2xl font-bold mb-6 text-indigo-700 tracking-wide text-center drop-shadow">
        Stock Summary for <span className="font-mono">{date}</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {infoItems.map(({ label, value, icon }) => (
          <div key={label} className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-xl shadow-inner hover:shadow-md transition-shadow duration-300">
            <div className="p-2 bg-white rounded-full border border-indigo-200">
              {icon}
            </div>
            <div>
              <p className="text-xs uppercase text-indigo-400 font-semibold">{label}</p>
              <p className="text-xl font-semibold text-gray-900">${label !== "Volume" ? value : value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
