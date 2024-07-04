import React, { useEffect } from "react";
import AboutBanner from "../../Components/AboutusComponents/AboutBanner";
import Aboutsection from "../../Components/AboutusComponents/Aboutsection";
import CreativeConcept from "../../Components/HomeComponents/CreativeConcept";

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <>
        <AboutBanner head="Get To Know Us" sub_head="About Us"/>
        <Aboutsection image="about/about.jpg"/>
        <CreativeConcept/>

    </>
  );
};

export default Aboutus;
