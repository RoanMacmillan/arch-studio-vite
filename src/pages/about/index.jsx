import React from "react";
import styles from "./index.module.css";
import AboutContactHero from "../../components/AboutContactHero/AboutContactHero";
import Leaders from "../../components/Leaders/Leaders";
import current from "../../assets/images/current3.svg";

export default function page() {
  return (
    <div className={styles.about}>
            <div className='currentContainer'>

      <img className="current" src={current} alt="current page"></img>
</div>
      <AboutContactHero
        heroImg="/images/about/desktop/image-hero.jpg"
        heading="Your team of professionals"
        paragraph="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
        big="About"
      />

      <div className={styles.aboutContent}>
        
        <div className={styles.middleContainer}>
          <div className={styles.textLeft}>
            <h2>
              Our<br></br> Heritage
            </h2>
            <br></br>

            <p>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>
            <br></br>

            <p>
              Specializing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>
            <br></br>
            <p>
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
          <div className={styles.imageRight}></div>
        </div>

        <div className={styles.leaderWrapper}>
          <h3>
            The<br></br> Leaders
          </h3>
          <Leaders />
        </div>
      </div>
    </div>
  );
}
