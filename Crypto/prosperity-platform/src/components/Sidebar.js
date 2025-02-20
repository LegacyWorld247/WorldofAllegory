// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-full p-4">
      <h2 className="text-2xl font-bold text-greenAccent mb-6">Your Journey</h2>
      <nav className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block p-2 bg-gray-800 text-greenAccent rounded"
              : "block p-2 hover:bg-gray-800 hover:text-greenAccent rounded"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive
              ? "block p-2 bg-gray-800 text-greenAccent rounded"
              : "block p-2 hover:bg-gray-800 hover:text-greenAccent rounded"
          }
        >
          Games
        </NavLink>
        <NavLink
          to="/trading"
          className={({ isActive }) =>
            isActive
              ? "block p-2 bg-gray-800 text-greenAccent rounded"
              : "block p-2 hover:bg-gray-800 hover:text-greenAccent rounded"
          }
        >
          Trading Tools
        </NavLink>
        <NavLink
          to="/diet"
          className={({ isActive }) =>
            isActive
              ? "block p-2 bg-gray-800 text-greenAccent rounded"
              : "block p-2 hover:bg-gray-800 hover:text-greenAccent rounded"
          }
        >
          Diet Plans
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "block p-2 bg-gray-800 text-greenAccent rounded"
              : "block p-2 hover:bg-gray-800 hover:text-greenAccent rounded"
          }
        >
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;