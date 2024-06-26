import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import AboutNeon from '../../Components/HomeComponents/About1/AboutNeon'
import MulticolorNeon from '../../Components/HomeComponents/MulticolorNeon'
import Singlecolor from '../../Components/HomeComponents/Singlecolor'
import Aboutushome from '../../Components/HomeComponents/Aboutushome'
import Vison from '../../Components/HomeComponents/Vison'
import Homegallery from '../../Components/HomeComponents/Homegallery'
import Enquiryform from '../../Components/HomeComponents/Enquiryform'
import Contact from '../../Components/HomeComponents/Contact'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'
import Aboutsection from '../../Components/AboutusComponents/Aboutsection'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <AboutNeon/>
      <MulticolorNeon/>
      <Singlecolor/>
      <Aboutushome/>
      {/* <Aboutsection image="about.png"/> */}
      <Vison/>
      <Homegallery/>
      <Enquiryform/>
      <Contact/>
      <CreativeConcept/>
    </div>
  )
}

export default Home
