import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;