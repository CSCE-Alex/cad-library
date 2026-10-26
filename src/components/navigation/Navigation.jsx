import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <NavLink 
        to="/" 
        end 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        About
      </NavLink>
      <NavLink 
        to="/listings" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Listings
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;