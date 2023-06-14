import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import AboutContactHero from "../../components/AboutContactHero/AboutContactHero";
import MapComponent from "../../components/Map/Map";
import arrow from "../../../public/images/icons/icon-arrow.svg";
import current from "../../assets/images/current4.svg";
import Form from "../../components/Form/Form";

export default function page() {
  const mapContainerRef = useRef(null);
  const [targetLocation, setTargetLocation] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(7);

  const handleViewOnMap = (location) => {
    setTargetLocation(location);
    setZoomLevel(18);
  };

  return (
    <div className={styles.contactContainer}>
      <div className="currentContainer">
        <img className="current" src={current} alt="current page"></img>
      </div>

      <AboutContactHero
        heroImg="/images/contact/desktop/image-hero.jpg"
        heading="Tell us about your project"
        paragraph="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
        big="Contact"
      />

      <div ref={mapContainerRef} className={styles.detailsContainer}>
        <h2>Contact Details</h2>

        <div className={styles.detailsChild}>
          <div className={styles.leftChild}>
            <h3>Main Office</h3>
            <span>Mail : archone@mail.com</span>
            <span>Address : 1892 Chenoweth Drive TN</span>
            <span>Phone : 123-456-3451</span>
          </div>
          <button
            onClick={() => {
              handleViewOnMap([37.7749, -122.4194]);
              mapContainerRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View on Map
            <img src={arrow} alt='arrow'></img>

          </button>
        </div>
        <div className={styles.detailsChild}>
          <div className={styles.leftChild}>
            <h3>Office II</h3>
            <span>Mail : archtwo@mail.com</span>
            <span>Address : 3399 Wines Lane TX</span>
            <span>Phone : 832-123-4321</span>
          </div>
          <button
            onClick={() => {
              handleViewOnMap([29.7604, -95.3698]);
              mapContainerRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View on Map
            <img src={arrow} alt='arrow'></img>
          </button>
        </div>
      </div>

      <div  className={styles.mapContainer}>
        <MapComponent targetLocation={targetLocation} zoomLevel={zoomLevel} />
      </div>

      <Form />
    </div>
  );
}
