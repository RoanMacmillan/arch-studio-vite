import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  };

  const isActive = (path) =>
    location.pathname === path ? styles.activeLink : "";

  useEffect(() => {
    return () => {
      document.body.classList.remove("noScroll");
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <img className={styles.logo} src="/images/logo.svg" alt="logo"></img>
        </Link>
        <div className={styles.desktopLinks}>
          <NavLink className={`${styles.defaultLink} ${isActive("/portfolio")}`} to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className={`${styles.defaultLink} ${isActive("/about")}`} to="/about">
          About Us
        </NavLink>
        <NavLink className={`${styles.defaultLink} ${isActive("/contact")}`} to="/contact">
          Contact
        </NavLink>
        </div>

        {menuOpen && (
          <div className={styles.overlay} onClick={handleMenuClick}></div>
        )}

        <img
          src="/images/icons/icon-hamburger.svg"
          alt="hamburger"
          onClick={handleMenuClick}
          className={styles.hamburger}
        />

        {menuOpen && (
          <div className={styles.mobileMenu}>
            <Link to="/portfolio" onClick={handleMenuClick}>
              Portfolio
            </Link>
            <Link to="/about" onClick={handleMenuClick}>
              About us
            </Link>
            <Link to="/contact" onClick={handleMenuClick}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
