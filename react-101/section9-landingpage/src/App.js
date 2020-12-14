import React from "react";
import Hero from "./components/Hero";

import Header from "./components/Header";
import MiddleSection from "./components/Sections/MiddleSection"
import RightSection from "./components/Sections/RightSection"
import LeftSection from "./components/Sections/LeftSection"
import Footer from "./components/Sections/Footer";



const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <LeftSection></LeftSection>
      <MiddleSection></MiddleSection>
      <RightSection></RightSection>
      <Footer></Footer>
      
    </div>
  );
};

export default App;
