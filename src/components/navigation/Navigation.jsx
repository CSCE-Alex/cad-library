import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [menuOpen,setMenuOpen] = useState(false);

  const toggleNav =() => {
    setMenuOpen(!menuOpen);
  }


  
  return (
    <nav className="main-nav">
      <a id= "toggle-nav" onClick={toggleNav} href="#">
        {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}
      </a>
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
        Services
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