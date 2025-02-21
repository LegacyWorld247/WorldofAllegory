import React from "react";

function Header({ onThemeToggle }) {
  return (
    <header className="header">
      <h1>LegacyWorld Trading</h1>
      <button onClick={onThemeToggle}>Toggle Theme</button>
    </header>
  );
}

export default Header;
