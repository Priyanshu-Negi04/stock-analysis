export function transformStockData(rawData) {
  if (!rawData) return [];

  const sortedDates = Object.keys(rawData).sort((a, b) => (new Date(b)) - (new Date(a)));

  return sortedDates.map(date => {
    const dayData = rawData[date];
    return {
      date,
      open: parseFloat(dayData["1. open"]),
      high: parseFloat(dayData["2. high"]),
      low: parseFloat(dayData["3. low"]),
      close: parseFloat(dayData["4. close"]),
      volume: parseInt(dayData["5. volume"], 10),
    };
  });
}
