import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });

  const handleOnChange = (e) => {
    setUserInfo((old) => {
      // console.log(old);
      return {
        ...userInfo,
        [e.target.name]: e.target.value,
      };
    });
    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    // API Call
    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("Success");
        alert("Thanks for contacting us");
        setUserInfo({
          name: "",
          email: "",
          phone: "",
          desc: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={userInfo.name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={userInfo.email}
          />
          <div id="emailHelp" className="form-text">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            onChange={handleOnChange}
            value={userInfo.phone}
          />
        </div>

        <div className="form-floating">
          <label htmlFor="desc">Elabourate your concern</label>
          <textarea
            className="form-control"
            placeholder="Write your concern here"
            id="desc"
            name="desc"
            onChange={handleOnChange}
            value={userInfo.desc}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
