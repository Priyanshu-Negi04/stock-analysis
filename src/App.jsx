import { useState } from "react";
import SearchBar from "./components/SearchBar";
import StockChart from "./components/StockChart";
import { fetchDailyStockData } from "./api/stockApi";
import { transformStockData } from "./utils/transformStockData";
import StockInfo from "./components/StockInfo";
import LoadingSpinner from "./components/LoadingSpinner";
import PopularStocks from "./components/PopularStocks";





export default function App() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (symbol) => {
    setLoading(true);
    setError(null);
    try {
      const rawData = await fetchDailyStockData(symbol);
      const transformed = transformStockData(rawData);
      setChartData(transformed);
    } catch (err) {
      setError(err.message || "Error fetching stock data");
      setChartData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <SearchBar onSearch={handleSearch} />
      <PopularStocks onSelect={handleSearch} />

      {loading && <LoadingSpinner />}


      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && chartData.length > 0 && (
        <>
          <StockInfo data={chartData[0]} />
          <StockChart data={chartData} />
        </>
      )}
    </div>
  );
}
