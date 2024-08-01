import React from "react";
import Header from "./components/Fragments/Header";
import Hero from "./components/Fragments/Hero";
import HeroExtra from "./components/Fragments/HeroExtra";
import BestSeller from "./components/Fragments/BestSeller";
import { Popular } from "./components/Fragments/Popular";
import { Feature } from "./components/Fragments/Feature";
import { Footer } from "./components/Fragments/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeroExtra />
      <BestSeller />
      <Popular />
      <Feature />
      <Footer />
    </>
  );
}

export default App;
