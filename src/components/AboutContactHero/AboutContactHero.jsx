import React from "react";
import styles from './AboutContactHero.module.css'

export default function AboutContactHero({ heroImg, heading, paragraph }) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImgWrapper}>
      <img src={heroImg} alt="hero"></img>
      <div className={styles.whiteSq}></div>
      </div>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
