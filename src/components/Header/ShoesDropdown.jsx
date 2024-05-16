import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const ShoesDropdown = ({ isMenuOpen }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={closeDropdown}
    >
      <NavLink to="/shoes">
        <span className="nav_text">Kicks</span>
      </NavLink>
      {isDropdownOpen && (
        <div
          className={`dropdown-menu ${isMenuOpen ? "dropdown-menu-mobile" : ""}`}
        >
          <nav>
            <NavLink to="/shoes/adidas">
              <span className="dropdown-nav_text">Adidas</span>
            </NavLink>
            <NavLink to="/shoes/newbalance">
              <span className="dropdown-nav_text">New Balance</span>
            </NavLink>
            <NavLink to="/shoes/nike">
              <span className="dropdown-nav_text">Nike</span>
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};