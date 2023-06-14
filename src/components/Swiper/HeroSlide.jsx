import React, { useEffect, useState, useRef } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import styles from "./HeroSlide.module.css";
import useIntersectionObserver from "../../components/useIntersectionObserver/useIntersectionObserver";
import { Link } from "react-router-dom";
import arrow from '../../assets/images/icon-arrow.svg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const HeroSlide = () => {
  const swiperRef = useRef(null);
  const [brightness, setBrightness] = useState("100%");
  const [textContainerRef, textContainerRefVisible] = useIntersectionObserver();
  const [heroSlideRef, heroSlideVisible] = useIntersectionObserver();
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
    swiperRef.current.swiper.slideTo(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setBrightness("65%");
    }, 700);

    return () => {
      clearTimeout(timer); // clear timeout if the component is unmounted
    };
  }, []);

  return (
    <div
      ref={heroSlideRef}
      className={`${styles.heroSlide} ${
        heroSlideVisible ? "fadeInLoad" : "hidden"
      }`}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        resistanceRatio={0}
        onSlideChange={(swiper) => {
          console.log("slide change");
          setActiveIndex(swiper.activeIndex % 4);
        }}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper-container" // Add this line
        
      >
        <SwiperSlide>
          <div
            className={`${styles.slideContainer} ${styles.paramourContainer}`}
          >
            <img
              className={styles.mobileSlide}
              src="/src/assets/images/1mobile.jpg"
              alt="Image 1"
              style={{
                filter: `brightness(${brightness})`,
                transition: "filter 1s ease",
              }}
            />
            <img
              className={styles.desktopSlide}
              src="/src/assets/images/2.jpg"
              alt="Image 1"
              style={{
                filter: `brightness(${brightness})`,
                transition: "filter 1s ease",
              }}
            />
            <div
              ref={textContainerRef}
              className={`${styles.textOverlay} ${
                textContainerRefVisible
                  ? "fadeInLoadTransform"
                  : "hiddenTransform"
              }`}
            >
              <h4 className={styles.paraText}>Project Paramour</h4>
              <p>
                Project made for an art museum near Southwest London. Project
                Paramour is a statement of bold, modern architecture.
              </p>
              <Link to='/portfolio'>
              <div className={styles.portfolioBtn}>See Our Portfolio<img className={styles.iconArrow} src={arrow} alt={arrow}></img></div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideContainer}>
            <img
              className={styles.mobileSlide}
              src="/src/assets/images/2mobile.jpg"
              alt="Image 2"
            />
            <img
              className={styles.desktopSlide}
              src="/src/assets/images/1.jpg"
              alt="Image 2"
            />
            <div className={styles.textOverlay}>
              <h4>Seraph Station</h4>
              <p>
                The Seraph Station project challenged us to design a unique
                station that would transport people through time.
              </p>
              <Link to='/portfolio'>
              <div className={styles.portfolioBtn}>See Our Portfolio<img className={styles.iconArrow} src={arrow} alt={arrow}></img></div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideContainer}>
            <img
              className={styles.mobileSlide}
              src="/src/assets/images/3mobile.jpg"
              alt="Image 3"
            />
            <img
              className={styles.desktopSlide}
              src="/src/assets/images/3.jpg"
              alt="Image 3"
            />
            <div className={styles.textOverlay}>
              <h4>Federal II Tower</h4>
              <p>
                A sequel theme project for a tower originally built in the
                1800s. We achieved this with a striking look of brutal
                minimalism with modern touches.
              </p>
              <Link to='/portfolio'>
              <div className={styles.portfolioBtn}>See Our Portfolio<img className={styles.iconArrow} src={arrow} alt={arrow}></img></div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideContainer}>
            <img
              className={styles.mobileSlide}
              src="/src/assets/images/4mobile.jpg"
              alt="Image 4"
            />
            <img
              className={styles.desktopSlide}
              src="/src/assets/images/4.jpg"
              alt="Image 4"
            />
            <div className={styles.textOverlay}>
              <h4 className={styles.trinity}>Trinity Bank Tower</h4>
              <p>
                Trinity Bank challenged us to make a concept for a 84 story
                building located in the middle of a city with a high earthquake
                frequency.
              </p>
              <Link to='/portfolio'>
              <div className={styles.portfolioBtn}>See Our Portfolio<img className={styles.iconArrow} src={arrow} alt={arrow}></img></div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.paginationContainer}>
        <button
          className={`${styles.button} ${
            activeIndex === 0 ? styles.active : ""
          }`}
          onClick={() => goToSlide(0)}
        >
          01
        </button>

        <button
          className={`${styles.button} ${
            activeIndex === 1 ? styles.active : ""
          }`}
          onClick={() => goToSlide(1)}
        >
          02
        </button>
        <button
          className={`${styles.button} ${
            activeIndex === 2 ? styles.active : ""
          }`}
          onClick={() => goToSlide(2)}
        >
          03
        </button>

        <button
          className={`${styles.button} ${
            activeIndex === 3 ? styles.active : ""
          }`}
          onClick={() => goToSlide(3)}
        >
          04
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
