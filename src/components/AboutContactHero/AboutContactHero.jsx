import React from "react";
import styles from './AboutContactHero.module.css'
import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver'

export default function AboutContactHero({ heroImg, heading, paragraph, big }) {


  const [heroContainerRef, heroContainerVisible] = useIntersectionObserver();


  return (
    <div ref={heroContainerRef} className={`${styles.heroContainer} ${heroContainerVisible ? 'fadeInLoad' : 'hidden'} `}>
      <div className={styles.heroImgWrapper}>
      <img className={styles.heroImg} src={heroImg} alt="hero"></img>
      <div className={styles.whiteSq}></div>
      
      </div>
      <div className={styles.textContainer}> 
      <h1>{heading}</h1>
      <p>{paragraph}</p> 
      </div>
      <div className={styles.whiteBg}></div>
      <strong className={styles.bigText}>{big}</strong>
    </div>
  );
}
