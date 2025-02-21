// TradingGame.js: Displays trading chart with Uniswap data on Polygon
import React, { useState, useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { useQuery } from "@apollo/client";
import client from "../ApolloClient"; // Apollo client for Uniswap data
import { PRICE_QUERY } from "../queries"; // GraphQL query for price data

const TradingGame = () => {
  const chartContainerRef = useRef(null);
  const [chart, setChart] = useState(null);
  const pairId = "0x45dda9cb7c25131df268515131f647d726f50608"; // USDC/WETH on Polygon

  // Fetch Uniswap data with detailed logging
  const { data, loading, error } = useQuery(PRICE_QUERY, {
    client,
    variables: { pairId },
    fetchPolicy: "cache-and-network", // Ensures fresh data
    onError: (err) => console.error("Query error:", err), // Log query-specific errors
  });

  console.log("Loading:", loading);
  console.log("Error:", error ? error.message : "No error");
  console.log("Data received:", data);

  // Initialize chart when component mounts
  useEffect(() => {
    if (!chartContainerRef.current || chart) return;

    const newChart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400, // Fixed height for visibility
      layout: { background: { color: "#1F2937" }, textColor: "#fff" },
      grid: { vertLines: { color: "#374151" }, horzLines: { color: "#374151" } },
      timeScale: { timeVisible: true, secondsVisible: true },
    });

    const candlestickSeries = newChart.addCandlestickSeries({
      upColor: "#10B981",
      downColor: "#EF4444",
      borderVisible: false,
      wickUpColor: "#10B981",
      wickDownColor: "#EF4444",
    });

    setChart({ instance: newChart, series: candlestickSeries });

    console.log("Chart initialized:", newChart);

    return () => {
      console.log("Cleaning up chart");
      newChart.remove();
    };
  }, []);

  // Update chart data when new data is available
  useEffect(() => {
    if (!chart || !data?.pairHourDatas) return;

    const chartData = data.pairHourDatas.map((entry) => ({
      time: entry.hourStartUnix,
      open: parseFloat(entry.open),
      high: parseFloat(entry.high),
      low: parseFloat(entry.low),
      close: parseFloat(entry.close),
    }));

    chart.series.setData(chartData);
    console.log("Chart data updated:", chartData);
  }, [data, chart]);

  // Handle resizing for responsiveness
  useEffect(() => {
    if (!chart?.instance || !chartContainerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (chartContainerRef.current) {
        chart.instance.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => resizeObserver.disconnect();
  }, [chart]);

  // Render UI
  return (
    <div className="mt-4 text-white border-2 border-greenAccent rounded-lg shadow-lg shadow-greenAccent/50 bg-gray-900 p-6">
      <h4 className="text-xl text-greenAccent font-bold mb-4">Trade Simulator</h4>
      <div className="flex flex-col space-y-8">
        {loading && <p className="text-white text-center">Loading chart data...</p>}
        {error && (
          <p className="text-red-500 text-center">
            Error fetching data: {error.message}. Check console for details.
          </p>
        )}
        <div className="bg-gray-800 rounded p-2 relative z-0 h-96 w-full overflow-hidden">
          <div ref={chartContainerRef} className="h-full w-full" />
        </div>
        <div className="flex flex-col items-center space-y-4 z-10 bg-gray-900 p-4 rounded">
          <p className="text-lg">Polygon Uniswap V3 - USDC/WETH</p>
        </div>
      </div>
    </div>
  );
};

export default TradingGame;
