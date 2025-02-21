import React, { useState } from "react";
import Header from "./components/Header";
import MarketCarousel from "./components/MarketCarousel";
import TradingChart from "./components/TradingChart";
import BuySellPanel from "./components/BuySellPanel";
import NFTMinting from "./components/NFTMinting";
import WalletConnectButton from "./components/WalletConnectButton";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState("light"); // Default to light theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container ${theme}`}>
      <Header onThemeToggle={toggleTheme} />

      {/* Market Overview Carousel */}
      <MarketCarousel />

      {/* Trading Interface Section */}
      <div className="trading-section">
        <TradingChart />
        <BuySellPanel />
      </div>

      {/* NFT Minting Section */}
      <NFTMinting />

      {/* Wallet Connect for Transactions */}
      <WalletConnectButton />
    </div>
  );
}

export default App;
