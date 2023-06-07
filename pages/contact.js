import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    desc: "",
  };
  const [contactInfo, setContactInfo] = useState(initialState);

  const handleOnChange = (e) => {
    setContactInfo((old) => {
      // console.log(old);
      return {
        ...contactInfo,
        [e.target.name]: e.target.value,
      };
    });
    // console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contactInfo);
    // API Call
    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(contactInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("Success");
        alert("Thanks for contacting us");
        setUserInfo(initialState);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={contactInfo.name}
            required
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={contactInfo.email}
            required
          />
          <div id="emailHelp" className={styles.formText}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formLabel}>
            Phone
          </label>
          <input
            type="number"
            className={styles.formcontrol}
            id="phone"
            name="phone"
            onChange={handleOnChange}
            value={contactInfo.phone}
            required
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formLabel}>
            Elabourate your concern
          </label>
          <textarea
            className={styles.formcontrol}
            placeholder="Write your concern here"
            id="desc"
            name="desc"
            onChange={handleOnChange}
            value={contactInfo.desc}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
