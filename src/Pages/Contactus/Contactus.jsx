import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import Contact from '../../Components/HomeComponents/Contact'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div>
      <AboutBanner head="Reach Us" sub_head="Contact Us"/>
      <Contact/>
      <CreativeConcept/>
    </div>
  )
}

export default Contactus
