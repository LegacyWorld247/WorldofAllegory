import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const TradingGame = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) {
      console.error("Chart container not found");
      return;
    }

    console.log("Creating chart with container:", chartContainerRef.current);
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: { background: { color: "#1F2937" }, textColor: "#fff" },
      grid: { vertLines: { color: "#374151" }, horzLines: { color: "#374151" } },
      timeScale: { timeVisible: true, secondsVisible: true },
    });

    console.log("Chart created:", chart);
    console.dir("Chart methods:", Object.keys(chart));
    if (!chart || typeof chart.addCandlestickSeries !== "function") {
      console.error("Chart object invalid or missing addCandlestickSeries:", chart);
      return;
    }

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#10B981",
      downColor: "#EF4444",
      borderVisible: false,
      wickUpColor: "#10B981",
      wickDownColor: "#EF4444",
    });
    console.log("Candlestick series added:", candlestickSeries);

    // Test data
    candlestickSeries.setData([
      { time: Math.floor(Date.now() / 1000) - 120, open: 100, high: 105, low: 95, close: 102 },
      { time: Math.floor(Date.now() / 1000) - 60, open: 102, high: 107, low: 100, close: 105 },
      { time: Math.floor(Date.now() / 1000), open: 105, high: 108, low: 103, close: 106 },
    ]);

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div className="mt-4 text-white border-2 border-greenAccent rounded-lg shadow-lg shadow-greenAccent/50 bg-gray-900 p-6">
      <h4 className="text-xl text-greenAccent font-bold mb-4">Trade Simulator</h4>
      <div className="flex flex-col space-y-8">
        <div className="bg-gray-800 rounded p-2 relative z-0 h-96 w-full">
          <div ref={chartContainerRef} className="h-full w-full" />
        </div>
        <div className="flex flex-col items-center space-y-4 z-10">
          <p>Chart Test - Static Data</p>
        </div>
      </div>
    </div>
  );
};

export default TradingGame;