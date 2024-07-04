import React, { useEffect } from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import Products from '../../Components/NeonGo/Products'

const NeonGo = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div>
      <AboutBanner head="NeonGo" sub_head="NeonGo"/>
      <Products/>
      <CreativeConcept/>
    </div>
  )
}

export default NeonGo
