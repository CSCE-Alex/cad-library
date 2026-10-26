import "./Header.css";
import logo from "./images/logo192.png"; 
import Navigation from "../navigation/Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="brand-section">
        <NavLink to="/">
          <img id="logo" src={logo} alt="CAD logo" />
        </NavLink>
        <h1>
          <NavLink to="/" className="brand-title">
            Carolina Auto Details
          </NavLink>
        </h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;