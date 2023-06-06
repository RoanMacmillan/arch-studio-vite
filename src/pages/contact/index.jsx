import React, { useState } from "react";
import styles from "./index.module.css";
import AboutContactHero from "../../components/AboutContactHero/AboutContactHero";
import MapComponent from '../../components/Map/Map'

export default function page() {

  const defaultPosition1 = [29.94021128960196, -95.34991622082381];
  const defaultPosition2 = [30.04280485083429, -94.26546013904418]; // Nashville, TN coordinates for example
  const [markerPositions, setMarkerPositions] = useState([]);

  const handleClick1 = () => {
    if (!markerPositions.some(pos => pos[0] === defaultPosition1[0] && pos[1] === defaultPosition1[1])) {
      setMarkerPositions(prevPositions => [...prevPositions, defaultPosition1]);
    }
  }

  const handleClick2 = () => {
    if (!markerPositions.some(pos => pos[0] === defaultPosition2[0] && pos[1] === defaultPosition2[1])) {
      setMarkerPositions(prevPositions => [...prevPositions, defaultPosition2]);
    }
  }
  

  return (
    <div className={styles.contactContainer}>
      <AboutContactHero
        heroImg="/images/contact/mobile/image-hero.jpg"
        heading="Tell us about your project"
        paragraph="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      />

  <div className={styles.detailsContainer}>
    <div className={styles.detailsChild}>
      <h2>Contact Details</h2>
      <h3>Main Office</h3>
      <span>Mail : archone@mail.com</span>
      <span>Address : 1892 Chenoweth Drive TN</span>
      <span>Phone : 123-456-3451</span>
      <button onClick={handleClick1}>View on Map</button>
      </div>
      <div className={styles.detailsChild}>
      <h3>Main Office</h3>
      <span>Mail : archone@mail.com</span>
      <span>Address : 1892 Chenoweth Drive TN</span>
      <span>Phone : 123-456-3451</span>
      <button onClick={handleClick2}>View on Map</button>
      </div>
      </div>


      <div className={styles.mapContainer}>
      <MapComponent center={defaultPosition1} markerPositions={markerPositions} />
      </div>

      <div className={styles.formContainer}>
    <h2>Connect with us</h2>
    <form>
      <div>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label><br />
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message</label><br />
        <textarea id="message" name="message" required></textarea>
      </div>
      <button className={styles.submitBtn} type="submit">Submit</button>
    </form>
</div>



    </div>
  );
}

