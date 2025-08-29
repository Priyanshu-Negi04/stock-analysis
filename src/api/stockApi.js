const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

export async function fetchDailyStockData(symbol) {
  try {
    const url = `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}&outputsize=compact`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("fetchDailyStockData data:", data);

    if (data["Error Message"] || !data["Time Series (Daily)"]) {
      throw new Error("Invalid symbol or API limit reached");
    }

    return data["Time Series (Daily)"];
  } catch (error) {
    console.error("fetchDailyStockData error:", error);
    throw error;
  }
}



