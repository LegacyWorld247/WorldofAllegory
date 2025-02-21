import React, { useState } from "react";

function BuySellPanel() {
  const [amount, setAmount] = useState("");

  const handleBuy = () => {
    alert(`Buying ${amount} BTC`);
  };

  const handleSell = () => {
    alert(`Selling ${amount} BTC`);
  };

  return (
    <div className="buy-sell-panel">
      <h2>Trade</h2>
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleBuy} className="buy">Buy</button>
      <button onClick={handleSell} className="sell">Sell</button>
    </div>
  );
}

export default BuySellPanel;
