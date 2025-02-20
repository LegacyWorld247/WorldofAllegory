// src/App.js
import './index.css'; // Must be here
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Games from "./pages/Games";
import TradingTools from "./pages/TradingTools";
import DietPlans from "./pages/DietPlans";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <div className="flex h-screen bg-dark text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <header className="flex justify-between items-center p-4 bg-gray-800 shadow">
            <h1 className="text-xl font-bold text-greenAccent">Prosperity Platform</h1>
            <button className="text-greenAccent hover:underline">Logout</button>
          </header>
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/games" element={<Games />} />
              <Route path="/trading" element={<TradingTools />} />
              <Route path="/diet" element={<DietPlans />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;