// src/pages/Games.js
import React from "react";

const Games = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-greenAccent mb-6">Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl text-greenAccent">Trade Simulator</h3>
          <p className="mt-2">Practice trading with virtual currency.</p>
          <button className="mt-4 bg-greenAccent text-dark px-4 py-2 rounded hover:bg-green-600">
            Play Now
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl text-greenAccent">Prosperity Quest</h3>
          <p className="mt-2">Complete challenges to earn rewards.</p>
          <button className="mt-4 bg-greenAccent text-dark px-4 py-2 rounded hover:bg-green-600">
            Start Quest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;