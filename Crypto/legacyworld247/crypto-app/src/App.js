// App.js: Sets up routing for the app
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TradingGame from "./components/TradingGame"; // Import from components folder

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TradingGame />} /> {/* Default route to trading */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;