import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import ImagesSection from '../../Components/LED Board/ImagesSection'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'

const Flex = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
    let images =[
        {
            image: "images/LED/Flex/1.png"
        },
        {
            image: "images/LED/Flex/2.png"
        },
        {
            image: "images/LED/Flex/3.png"
        },
        {
            image: "images/LED/Flex/4.png"
        },
        {
            image: "images/LED/Flex/5.png"
        },
        {
            image: "images/LED/Flex/6.png"
        }
    ]
  return (
    <div>
      <AboutBanner head="LED Board" sub_head="LED Board" />
      <ImagesSection
        head="Flex Board"
        sub_head="Flex Board"
        images={images}
      />
      <CreativeConcept />
    </div>
  )
}

export default Flex
