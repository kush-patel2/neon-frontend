import React, { useEffect } from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import Marquee from '../../Components/CustomeNeon/Marquee'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import MultiColorDesign from '../../Components/CustomeNeon/MultiColorDesign'

const CustomMultiColor = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
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
