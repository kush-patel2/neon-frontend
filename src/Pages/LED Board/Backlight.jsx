import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import ImagesSection from '../../Components/LED Board/ImagesSection'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'

const Backlight = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
    let images =[
        {
            image: "images/LED/BacklitBoard/1.png"
        },
        {
            image: "images/LED/BacklitBoard/2.png"
        },
        {
            image: "images/LED/BacklitBoard/3.png"
        },
        {
            image: "images/LED/BacklitBoard/4.png"
        },
        {
            image: "images/LED/BacklitBoard/5.png"
        },
        {
            image: "images/LED/BacklitBoard/6.png"
        },
        {
            image: "images/LED/BacklitBoard/7.png"
        }
    ]
  return (
    <div>
      <AboutBanner head="LED Board" sub_head="LED Board" />
      <ImagesSection
        head="Back Light Board"
        sub_head="Back Light Board"
        images={images}
      />
      <CreativeConcept />
    </div>
  )
}

export default Backlight
