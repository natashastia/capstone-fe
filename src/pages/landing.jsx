import React from "react";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import AboutUs from "./aboutus.jsx";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default Homepage;
