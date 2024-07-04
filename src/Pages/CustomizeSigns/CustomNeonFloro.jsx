import React, { useEffect } from "react";
import AboutBanner from "../../Components/AboutusComponents/AboutBanner";
import CreativeConcept from "../../Components/HomeComponents/CreativeConcept";
import Marquee from "../../Components/CustomeNeon/Marquee";
import NeonDesign from "../../Components/CustomeNeon/NeonDesign";

const CustomNeonFloro = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div>
      <AboutBanner head="Neon Customization" sub_head="Customization" />
      <Marquee/>
      <NeonDesign/>
      <CreativeConcept />
    </div>
  );
};

export default CustomNeonFloro;
