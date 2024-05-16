import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Profile/auth";
import { useSpring, animated } from "react-spring";
import { ShoesDropdown } from "./ShoesDropdown";
import { Logout } from "../Profile/Logout";
import logo from "../../assets/gif/logo.gif";
import { SearchModal } from "./SearchModal";
import "./Navbar.css";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const auth = useAuth();
  const menuAnimation = useSpring({
    opacity: openMenu ? 1 : 0,
    config: { duration: 300 },
  });

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };
  //logic to make the mobile menu disappear when clicked outside
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      //check if the click is outside of the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      //remove the event listener when the component unmounts
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>
      </div>

      <div className="navlinks">
        <ShoesDropdown isMenuOpen={openMenu} />
        <NavLink to="/accessories">
          <span className="nav_text">Accessories</span>
        </NavLink>
        <span className="nav_text_search" onClick={openSearchModal}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <NavLink to="/profile">
          <span className="nav_text_profile">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
        </NavLink>
        <NavLink to="/cart">
          <span className="nav_text_cart">
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </span>
        </NavLink>
        {!auth.user ? (
          <NavLink to="/login" className="login_button">
            <i className="fa fa-sign-in" aria-hidden="true" />
            <span className="login_button_text">
              Login
            </span>
          </NavLink>
        ) : (
          <Logout />
        )}
      </div>

      <div className={`hamburger-icon ${openMenu ? 'open' : ''}`} onClick={() => setOpenMenu(!openMenu)} ref={menuRef}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {openMenu && (
        <animated.ul
          className="mobile-menu"
          style={menuAnimation}
        >
          <ShoesDropdown />
          <NavLink to="/accessories">
            <span className="nav_text">Accessories</span>
          </NavLink>
          <span className="nav_text">Search</span>
          <NavLink to="/profile">
            <span className="nav_text">Profile</span>
          </NavLink>
          <NavLink to="/cart">
            <span className="nav_text">Cart</span>
          </NavLink>
          {!auth.user ? (
            <NavLink to="/login" className="login_button">
              <i className="fa fa-sign-in" aria-hidden="true" />
              <span className="login_button_text">Login</span>
            </NavLink>
          ) : (
            <Logout />
          )}
        </animated.ul>
      )}

      <SearchModal isOpen={isSearchModalOpen} onRequestClose={closeSearchModal} />
    </header>
  );
};
