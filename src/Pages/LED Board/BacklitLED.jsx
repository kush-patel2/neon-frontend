import React from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import ImagesSection from '../../Components/LED Board/ImagesSection'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'

const BacklitLED = () => {
    let images =[
        {
            image: "images/LED/Backlit/1.png"
        },
        {
            image: "images/LED/Backlit/2.png"
        },
        {
            image: "images/LED/Backlit/3.png"
        },
        {
            image: "images/LED/Backlit/4.png"
        },
        {
            image: "images/LED/Backlit/5.png"
        },
        {
            image: "images/LED/Backlit/6.png"
        },
        {
            image: "images/LED/Backlit/7.png"
        }
    ]
  return (
    <div>
      <AboutBanner head="LED Board" sub_head="LED Board" />
      <ImagesSection
        head="Backlit LED Board"
        sub_head="Backlit LED Board"
        images={images}
      />
      <CreativeConcept />
    </div>
  )
}

export default BacklitLED
