import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Button from "../../components/button/button";
import current from "../../assets/images/current.svg";
import useIntersectionObserver from "../../components/useIntersectionObserver/useIntersectionObserver";
import { Link } from "react-router-dom";
import HeroSlide from "../../components/Swiper/HeroSlide";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [brightness, setBrightness] = useState("100%");
  const [textBtnRef, textBtnVisible] = useIntersectionObserver();
  const [heroContainerRef, heroContainerVisible] = useIntersectionObserver();
  const [textWrapperRef, textWrapperVisible] = useIntersectionObserver();
  const [aboutWrapperRef, aboutWrapperVisible] = useIntersectionObserver();
  const [featuredContainerRef, featuredContainerVisible] =
    useIntersectionObserver();

 

  return (
    <main>
      <div className="currentContainer">
      <img className="current" src={current} alt="current page"></img>
      </div>

      <HeroSlide />
      
      <div
        ref={textWrapperRef}
        className={`${styles.textWrapper} ${
          textWrapperVisible ? "fadeInLoad" : "hidden"
        }  `}
      >
        <div className={styles.leftText}>
          <div className={styles.line}></div>
          <strong className={styles.bgText}>Welcome</strong>
          <h2>
            Welcome to<br></br> Arch Studio
          </h2>
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p>
            {""}
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>{" "}
          <p>
            {" "}
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>

        <div className={styles.imageRight}></div>
      </div>

      <div className={styles.heroContainer}>
        <div
          ref={aboutWrapperRef}
          className={`${styles.heroWrapper} ${styles.aboutWrapper} ${
            aboutWrapperVisible ? "fadeInLoad" : "hidden"
          }`}
        >
          <h1>Small team, big ideas</h1>

          <Button href="/about" width="187px">
            About Us
          </Button>
        </div>
      </div>

      <div
        ref={featuredContainerRef}
        className={`${styles.featuredContainer} ${
          featuredContainerVisible ? "fadeInLoad" : "hidden"
        }`}
      >
        <div className={styles.featureBtnWrapper}>
          <h1>Featured</h1>
          <Button className={styles.featureBtn} href="/portfolio" width="169px">
            See All
          </Button>
        </div>

        <div className={styles.cardContainer}>
          <div className={`${styles.imageCard} ${styles.card1}`}>
            <h2>Project Del Sol</h2>
            <Link to="/portfolio">View All Projects</Link>

            <strong>1</strong>
          </div>

          <div className={`${styles.imageCard} ${styles.card2}`}>
            <h2>228B Tower</h2>
            <Link to="/portfolio">View All Projects</Link>

            <strong>2</strong>
          </div>

          <div className={`${styles.imageCard} ${styles.card3}`}>
            <h2>Le Prototype</h2>
            <Link to="/portfolio">View All Projects</Link>

            <strong>3</strong>
          </div>
        </div>

        <Button className={styles.mobileBtn} href="/portfolio" width="100%">
          See All
        </Button>
      </div>
    </main>
  );
}
