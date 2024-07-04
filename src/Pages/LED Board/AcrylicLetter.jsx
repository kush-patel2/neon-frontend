import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import ImagesSection from '../../Components/LED Board/ImagesSection'

const AcrylicLetter = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
    let images = [
        {
            image: "images/LED/Acrylic/1.png"
        },
        {
            image: "images/LED/Acrylic/2.png"
        },
        {
            image: "images/LED/Acrylic/3.png"
        },
        {
            image: "images/LED/Acrylic/4.png"
        }
    ]
  return (
    <div>
      <AboutBanner head="LED Board" sub_head="LED Board"/>
    <ImagesSection head="Acrylic Letters" sub_head="Acrylic Letters" images={images}/>
      <CreativeConcept/>
    </div>
  )
}

export default AcrylicLetter
