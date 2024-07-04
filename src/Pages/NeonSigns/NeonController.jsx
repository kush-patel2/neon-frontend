import React, { useEffect } from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import ControllerProd from '../../Components/NeonSignComponents/ControllerProd'

const NeonController = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div>
      <AboutBanner head="Neon Controller" sub_head="Neon Signs"/>
      <ControllerProd/>
      <CreativeConcept/>
    </div>
  )
}

export default NeonController
