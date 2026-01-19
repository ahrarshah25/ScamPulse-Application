import React from "react";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import Hero from '../components/LandingPage/Hero/Hero';
import TS from "../components/LandingPage/Trust & Security/TS";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TS />
    </div>
  );
};

export default Landing;
