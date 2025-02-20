// src/pages/TradingTools.js
import React from "react";

const TradingTools = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-greenAccent mb-6">Trading Tools</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl text-greenAccent">Premium Trading Dashboard</h3>
        <p className="mt-2">Access real-time charts, my top picks, and more.</p>
        <p className="mt-2 text-gray-400">[Premium Feature - Upgrade to Unlock]</p>
        <button className="mt-4 bg-greenAccent text-dark px-4 py-2 rounded hover:bg-green-600">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default TradingTools;