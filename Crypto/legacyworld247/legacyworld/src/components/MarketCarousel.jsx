import React, { useEffect, useState } from "react";

function MarketCarousel() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Simulated API fetch for live crypto prices
    setPrices([
      { pair: "BTC/ETH", price: "0.0325" },
      { pair: "BNB/USDT", price: "410.50" },
      { pair: "SOL/USDC", price: "95.23" },
    ]);
  }, []);

  return (
    <div className="market-carousel">
      {prices.map((coin, index) => (
        <div key={index} className="coin">
          <span>{coin.pair}</span>
          <span>{coin.price}</span>
        </div>
      ))}
    </div>
  );
}

export default MarketCarousel;
