import React, { useEffect } from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import ImagesSection from '../../Components/LED Board/ImagesSection'

const ReversibleBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
    let images =[
        {
            image: "images/LED/Reversible/1.png"
        },
        {
            image: "images/LED/Reversible/2.png"
        },
        {
            image: "images/LED/Reversible/3.png"
        },
        {
            image: "images/LED/Reversible/4.png"
        },
        {
            image: "images/LED/Reversible/5.png"
        }
    ]
  return (
    <div>
      <AboutBanner head="Reversible Board" sub_head="Reversible Board" />
      <ImagesSection
        head="Reversible Board"
        sub_head="Reversible Board"
        images={images}
      />
      <CreativeConcept />
    </div>
  )
}

export default ReversibleBoard
