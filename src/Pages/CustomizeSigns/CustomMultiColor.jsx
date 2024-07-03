import React from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import Marquee from '../../Components/CustomeNeon/Marquee'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import MultiColorDesign from '../../Components/CustomeNeon/MultiColorDesign'

const CustomMultiColor = () => {
  return (
    <div>
      <AboutBanner head="Neon Customization" sub_head="Customization" />
      <Marquee/>
      <MultiColorDesign/>
      <CreativeConcept />
    </div>
  )
}

export default CustomMultiColor
