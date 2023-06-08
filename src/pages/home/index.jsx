import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../../components/button/button";
import current from '../../assets/images/current.svg'

const slides = [
  {
    background: "/images/home/desktop/image-hero-paramour.jpg",
    title: "Project Paramour",
    text: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    background: "/images/home/desktop/image-hero-seraph.jpg",
    title: "Seraph Station",
    text: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  {
    background: "/images/home/desktop/image-hero-trinity.jpg",
    title: "Trinity Bank Tower",
    text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
  {
    background: "/images/home/desktop/image-hero-federal.jpg",
    title: "Federal II Tower",
    text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <main>
      <img className={styles.current} src={current} alt='current page'></img>
      <div className={styles.heroContainer}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
        />
        <div className={styles.heroWrapper}>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].text}</p>

          <Button href="/portfolio">See Our Portfolio</Button>
        </div>
        <div className={styles.slideBtns}>

        {slides.map((_, idx) => (
          <button 
          className={`${styles.slideBtn} ${currentSlide === idx ? styles.active : ''}`}
          key={idx} 
          onClick={() => setCurrentSlide(idx)}
        >
          {(idx + 1).toString().padStart(2, '0')}
        </button>
        ))}
        </div>

      </div>

      <div className={styles.textWrapper}>
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
        <div className={`${styles.heroWrapper} ${styles.aboutWrapper}`}>
          <h1>Small team, big ideas</h1>

          <Button href="/about" width="187px">
            About Us
          </Button>
        </div>
      </div>

      <div className={styles.featuredContainer}>
        <div className={styles.featureBtnWrapper}>
          <h1>Featured</h1>
          <Button className={styles.featureBtn} href="/portfolio" width="169px">
            See All
          </Button>
        </div>

        <div className={styles.cardContainer}>
          <div className={`${styles.imageCard} ${styles.card1}`}>
            <h2>Project Del Sol</h2>
            <a>View all projects</a>

            <strong>1</strong>
          </div>

          <div className={`${styles.imageCard} ${styles.card2}`}>
            <h2>228B Tower</h2>
            <a>View all projects</a>

            <strong>2</strong>
          </div>

          <div className={`${styles.imageCard} ${styles.card3}`}>
            <h2>Le Prototype</h2>
            <a>View all projects</a>

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
