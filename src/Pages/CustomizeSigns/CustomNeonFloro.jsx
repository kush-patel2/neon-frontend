import React from "react";
import AboutBanner from "../../Components/AboutusComponents/AboutBanner";
import CreativeConcept from "../../Components/HomeComponents/CreativeConcept";
import Marquee from "../../Components/CustomeNeon/Marquee";
import NeonDesign from "../../Components/CustomeNeon/NeonDesign";

const CustomNeonFloro = () => {
  return (
    <div>
      <AboutBanner head="LED Board" sub_head="LED Board" />
      <Marquee/>
      <NeonDesign/>
      <CreativeConcept />
    </div>
  );
};

export default CustomNeonFloro;
