import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Cv from "../components/Cv";

const Home = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <Work />
      <Project />
      <Cv />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
