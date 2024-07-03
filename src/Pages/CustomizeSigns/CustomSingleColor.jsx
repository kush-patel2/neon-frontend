import React from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import Marquee from '../../Components/CustomeNeon/Marquee'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import SingleColorDesign from '../../Components/CustomeNeon/SingleColorDesign'

const CustomSingleColor = () => {
  return (
    <div>
      <AboutBanner head="Neon Customization" sub_head="Customization" />
      <Marquee/>
    <SingleColorDesign/>
      <CreativeConcept />
    </div>
  )
}

export default CustomSingleColor
