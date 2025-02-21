import React from "react";

function NFTMinting() {
  const handleMint = () => {
    alert("NFT Minted based on Oracle Data!");
  };

  return (
    <div className="nft-minting">
      <h2>Mint Event-Based NFT</h2>
      <button onClick={handleMint}>Mint NFT</button>
    </div>
  );
}

export default NFTMinting;
