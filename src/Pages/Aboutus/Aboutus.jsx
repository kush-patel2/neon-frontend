import React from "react";
import AboutBanner from "../../Components/AboutusComponents/AboutBanner";
import Aboutsection from "../../Components/AboutusComponents/Aboutsection";
import CreativeConcept from "../../Components/HomeComponents/CreativeConcept";

const Aboutus = () => {
  return (
    <>
        <AboutBanner head="Get To Know Us" sub_head="About Us"/>
        <Aboutsection image="about/about.jpg"/>
        <CreativeConcept/>

    </>
  );
};

export default Aboutus;
