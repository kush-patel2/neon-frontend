import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import ImgGallery from '../../Components/Gallery/ImgGallery'

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div>
      <AboutBanner head="Neon Gallery" sub_head="Gallery" />
      <ImgGallery/>
      <CreativeConcept />
    </div>
  )
}

export default Gallery
