import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import NeonDesc from '../../Components/NeonSignComponents/NeonDesc'

const NeonFloro = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
   const  links = [
        {
            link: "https://www.youtube.com/embed/_MvYm9AKBTQ?autoplay=0&amp;loop=1&amp;playlist=_MvYm9AKBTQ"
        },
        {
            link: "https://www.youtube.com/embed/eSRzWDZkiuw?autoplay=0&amp;loop=1&amp;playlist=eSRzWDZkiuw"
        },
        {
            link: "https://www.youtube.com/embed/OHe7-bUMwhw?autoplay=0&amp;loop=1&amp;playlist=OHe7-bUMwhw"
        },
        {
            link: "https://www.youtube.com/embed/-8vXsGk7bO4?autoplay=0&amp;loop=1&amp;playlist=-8vXsGk7bO4"
        },
        {
            link: "https://www.youtube.com/embed/Xn4Oo3YOako?autoplay=0&amp;loop=1&amp;playlist=Xn4Oo3YOako"
        }
    ]
  return (
    <div>
      <AboutBanner head="Neon Sign" sub_head="Neon Sign"/>
      <NeonDesc 
      head="Neon FloRo"
      p1="Illuminated Channel letters are three-dimensional text, usually
                3-6 inches deep, that can be customized into a variety of fonts,
                colours, and sizes. They are often used as a building’s primary
                outdoor signage, adorning the storefront or haling bypassers out
                near the road."
      p2="Floro is an RGB neon sign that is made with revolutionary
                chromatic technology. That means you can now select from a
                countless range of shades and over 200+ flow modes to enjoy your
                neon sign in the best manner. That’s not all! With FloRo, you
                can even control the speed and brightness of your personalised
                neon signs; all with your smartphone app remote."  
      links={links}  
      />
      <CreativeConcept/>
    </div>
  )
}

export default NeonFloro
