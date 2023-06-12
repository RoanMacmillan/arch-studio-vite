import React, { useState } from "react";
import styles from "./index.module.css";
import AboutContactHero from "../../components/AboutContactHero/AboutContactHero";
import MapComponent from "../../components/Map/Map";
import arrow from "../../../public/images/icons/icon-arrow.svg";
import current from "../../assets/images/current4.svg";

export default function page() {
  const defaultPosition1 = [29.94021128960196, -95.34991622082381];
  const defaultPosition2 = [30.04280485083429, -94.26546013904418]; // Nashville, TN coordinates for example
  const [markerPositions, setMarkerPositions] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = {};

    if (!form.name) errs.name = "*Name is required";
    if (!form.email) errs.email = "*Email is required";
    else if (!validateEmail(form.email)) errs.email = "*Email is not valid";
    if (!form.message) errs.message = "*Message is required";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      // proceed with form submission...
    }
  };

  const handleClick1 = () => {
    if (
      !markerPositions.some(
        (pos) =>
          pos[0] === defaultPosition1[0] && pos[1] === defaultPosition1[1]
      )
    ) {
      setMarkerPositions((prevPositions) => [
        ...prevPositions,
        defaultPosition1,
      ]);
    }
  };

  const handleClick2 = () => {
    if (
      !markerPositions.some(
        (pos) =>
          pos[0] === defaultPosition2[0] && pos[1] === defaultPosition2[1]
      )
    ) {
      setMarkerPositions((prevPositions) => [
        ...prevPositions,
        defaultPosition2,
      ]);
    }
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

      <div className={styles.detailsContainer}>
        <h2>Contact Details</h2>

        <div className={styles.detailsChild}>
          <div className={styles.leftChild}>
            <h3>Main Office</h3>
            <span>Mail : archone@mail.com</span>
            <span>Address : 1892 Chenoweth Drive TN</span>
            <span>Phone : 123-456-3451</span>
          </div>
          <button onClick={handleClick1}>View on Map</button>
        </div>
        <div className={styles.detailsChild}>
          <div className={styles.leftChild}>
            <h3>Office II</h3>
            <span>Mail : archtwo@mail.com</span>
            <span>Address : 3399 Wines Lane TX</span>
            <span>Phone : 832-123-4321</span>
          </div>
          <button onClick={handleClick2}>View on Map</button>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <MapComponent
          center={defaultPosition1}
          markerPositions={markerPositions}
        />
      </div>

      <div className={styles.formContainer}>
        <h2>Connect with us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <br />
            {errors.name && <span className={styles.error}>{errors.name}</span>}

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <br />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <br />
            {errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className={styles.submitBtn} type="submit">
            <img className={styles.arrow} src={arrow} alt="arrow"></img>
          </button>
        </form>
      </div>
    </div>
  );
}
