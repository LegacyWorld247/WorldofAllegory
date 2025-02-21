import React, { useState } from "react";

function WalletConnectButton() {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    // Placeholder for WalletConnect integration
    setConnected(true);
    alert("Wallet Connected!");
  };

  return (
    <button onClick={handleConnect} className="wallet-connect">
      {connected ? "Connected" : "Connect Wallet"}
    </button>
  );
}

export default WalletConnectButton;
