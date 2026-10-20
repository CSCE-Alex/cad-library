import React from 'react';
import Navigation from '../navigation/Navigation';
import logo from './images/CADlogo.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-area">
          <img src={logo} alt="CAD Library Logo" className="header-logo" />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;