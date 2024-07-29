import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import NeonDesc from '../../Components/NeonSignComponents/NeonDesc'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'

const MulticolorNeon = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
    const  links = [
        {
            link: "https://www.youtube.com/embed/ET80h8ZNKvQ?autoplay=0&loop=1&playlist=ET80h8ZNKvQ"
        },
        {
            link: "https://www.youtube.com/embed/eGuzEyEMwNU?autoplay=0&loop=1&playlist=eGuzEyEMwNU"
        },
        {
            link: "https://www.youtube.com/embed/vL3oGFjqQ-Y?autoplay=0&loop=1&playlist=vL3oGFjqQ-Y"
        }
    ]
  return (
    <div>
      <AboutBanner head="Neon Sign" sub_head="Neon Sign"/>
      <NeonDesc 
      head="Multicolor Neon"
      p1="Multi-Color Neon offers a dazzling array of hues that can create a unique, eye-catching atmosphere for any occasion, from parties to business events, showcasing a spectrum of colors that's sure to impress and inspire."
      p2=""
      links={links}  
      />
      <CreativeConcept/>
    </div>
  )
}

export default MulticolorNeon
