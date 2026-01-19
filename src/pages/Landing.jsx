import React from "react";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import Hero from '../components/LandingPage/Hero/Hero';
import TS from "../components/LandingPage/Trust & Security/TS";
import Features from "../components/LandingPage/Features/Features";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TS />
      <Features />
    </div>
  );
};

export default Landing;
