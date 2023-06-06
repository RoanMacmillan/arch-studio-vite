import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  };

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
          <Link className={styles.pLink} to="/portfolio">Portfolio</Link>
          <Link className={styles.aboutLink} to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
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
