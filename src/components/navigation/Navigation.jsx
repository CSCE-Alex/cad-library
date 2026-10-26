import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="about" className={({ isActive }) => (isActive ? "active" : "")}>
        About
      </NavLink>
      <NavLink to="listings" className={({ isActive }) => (isActive ? "active" : "")}>
        Listings
      </NavLink>
    </nav>
  );
};

export default Navigation;