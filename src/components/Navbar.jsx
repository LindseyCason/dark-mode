import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode"

const Navbar = () => {
  const [mode, setMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setMode(!mode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={mode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
