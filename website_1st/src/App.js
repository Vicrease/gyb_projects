import React from "react";
import Navbar from "./components/Navbar";
// import { Home, About, Contact } from "./Pages";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="Description">
        <section className="gyb_logo">
          <img src="gyb_logo_640.jpg" alt="GYB_LOGO" />
        </section>
        <p> Welcome to</p>
        <h1>Get Your Book</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="Description">
        <p>Welcome to </p>
        <h1>About Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="Description">
        <p>Welcome to </p>
        <h1>Contact Page</h1>
      </section>
    </>
  );
};

const Notes = () => {
  return (
    <>
      <Navbar />
      <section className="Description">
        <p>Welcome to </p>
        <h1>Notes Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Notes" element={<Notes />} />
      </Routes>
    </>
  );
};

export default App;
