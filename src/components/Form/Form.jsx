import React, { useState } from "react";
import styles from './Form.module.css'
import arrow from "../../../public/images/icons/icon-arrow.svg";

export default function Form() {
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
  return (
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
          {errors.email && <span className={styles.error}>{errors.email}</span>}

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
  );
}
