import React, { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const db_url="https://shopping-website-9879a-default-rtdb.firebaseio.com/addToForm.js"
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Initialize Firebase
    const firebaseConfig = {
      db_url
    };
    firebase.initializeApp(firebaseConfig);

    // Send data to Firebase database
    firebase
      .database()
      .ref("contacts")
      .push({
        name: name,
        email: email,
        phone: phone,
      })
      .then(() => {
        console.log("Data saved to Firebase database");
      })
      .catch((error) => {
        console.error("Error saving data to Firebase database: ", error);
      });

    // Clear form inputs
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
