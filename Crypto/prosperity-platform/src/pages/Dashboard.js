import React, { useState } from "react"; // Add useState import

const Dashboard = () => {
  const [score, setScore] = useState(82); // Add state for Prosperity Score

  return (
    <div>
      <h2 className="text-3xl font-bold text-greenAccent mb-6">Welcome to Your Prosperity Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl text-greenAccent">Prosperity Score</h3>
          <p className="text-4xl font-bold mt-2">{score}</p> {/* Use state variable */}
          <button
            className="mt-4 bg-greenAccent text-dark px-4 py-2 rounded hover:bg-green-600"
            onClick={() => setScore(score + 1)} // Add button with onClick
          >
            Boost
          </button>
          <p className="text-sm mt-2">Level up by engaging more!</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl text-greenAccent">Quick Start</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/games" className="text-greenAccent hover:underline">Play Games</a></li>
            <li><a href="/trading" className="text-greenAccent hover:underline">Trade Now</a></li>
            <li><a href="/diet" className="text-greenAccent hover:underline">Plan Your Diet</a></li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl text-greenAccent">Recent Activity</h3>
          <p className="mt-2">Completed Trade Simulator - 5 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;