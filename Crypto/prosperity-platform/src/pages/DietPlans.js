// src/pages/DietPlans.js
import React from "react";

const DietPlans = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-greenAccent mb-6">Diet Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl text-greenAccent">Diet Quiz</h3>
          <p className="mt-2">Find the perfect plan for your goals.</p>
          <button className="mt-4 bg-greenAccent text-dark px-4 py-2 rounded hover:bg-green-600">
            Take Quiz
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl text-greenAccent">Progress Tracker</h3>
          <p className="mt-2">Log your meals and stay on track.</p>
          <button className="mt-4 bg-greenAccent text-dark px-4 py-2 rounded hover:bg-green-600">
            Start Tracking
          </button>
        </div>
      </div>
    </div>
  );
};

export default DietPlans;