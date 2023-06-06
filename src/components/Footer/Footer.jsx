import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
import Button from "../button/button";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconWrapper}>
        <img src="/images/logo.svg" alt="logo"></img>
      </div>

      <nav className={styles.footerNav}>
        <Link className={styles.pLink} to="/portfolio">Portfolio</Link>
        <Link className={styles.aboutLink} to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </nav>

        <Button href='/portfolio' width="252px">
          See Our Portfolio
        </Button>
    </footer>
  );
}
