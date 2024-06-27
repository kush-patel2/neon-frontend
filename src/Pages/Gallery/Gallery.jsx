import React from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import ImgGallery from '../../Components/Gallery/ImgGallery'

const Gallery = () => {
  return (
    <div>
      <AboutBanner head="Neon Gallery" sub_head="Gallery" />
      <ImgGallery/>
      <CreativeConcept />
    </div>
  )
}

export default Gallery
