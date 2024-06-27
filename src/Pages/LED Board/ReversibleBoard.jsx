import React from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import ImagesSection from '../../Components/LED Board/ImagesSection'

const ReversibleBoard = () => {
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

export default ReversibleBoard
