import React from "react";
import TradingGame from "../components/TradingGame";

const Games = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-greenAccent mb-6">Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl text-greenAccent">Trade Simulator</h3>
          <p className="mt-2 text-white">Practice trading with virtual currency.</p>
          <TradingGame />
        </div>
      </div>
    </div>
  );
};

export default Games;