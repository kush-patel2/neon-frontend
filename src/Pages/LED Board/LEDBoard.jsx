import React, { useEffect } from "react";
import AboutBanner from "../../Components/AboutusComponents/AboutBanner";
import ImagesSection from "../../Components/LED Board/ImagesSection";
import CreativeConcept from "../../Components/HomeComponents/CreativeConcept";

const LEDBoard = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
    let images =[
        {
            image: "images/LED/LEDSign/1.png"
        },
        {
            image: "images/LED/LEDSign/2.png"
        },
        {
            image: "images/LED/LEDSign/3.png"
        },
        {
            image: "images/LED/LEDSign/4.png"
        },
        {
            image: "images/LED/LEDSign/5.png"
        },
        {
            image: "images/LED/LEDSign/6.png"
        },
        {
            image: "images/LED/LEDSign/7.png"
        },
        {
            image: "images/LED/LEDSign/8.png"
        },
        {
            image: "images/LED/LEDSign/9.png"
        },
        {
            image: "images/LED/LEDSign/10.png"
        },
    ]
  return (
    <div>
      <AboutBanner head="LED Board" sub_head="LED Board" />
      <ImagesSection
        head="Led Sign Board"
        sub_head="Led Sign Board"
        images={images}
      />
      <CreativeConcept />
    </div>
  );
};

export default LEDBoard;
