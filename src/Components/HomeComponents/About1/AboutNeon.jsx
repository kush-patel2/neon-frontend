import React from 'react'
import "../../../assets/css/aboutneon.css"

const AboutNeon = () => {
  return (
    <>
    <section id="introduction" className="about_wrapper">
    <div className="container">
      <div className="row flex-lg-row flex-column justify-content-center">
       
        <div className="col-lg-6 text-center text-lg-start">
          <h6 className='sub_head'>Shine on with FloRo!</h6>
          <h3 className='s_head'>About Neon FloRO</h3>
          <p className='h_body'>Neon FloRo is more than just a lighting solution - it's a statement piece that adds personality and character to any space, whether it's a commercial establishment, a home, or a special event.</p>
          <p className='h_body'>
          Floro is an RGB neon sign that is made with revolutionary chromatic technology. That means you can now select from a countless range of shades and over 200+ flow modes to enjoy your neon sign in the best manner. That’s not all! With FloRo, you can even control the speed and brightness of your personalised neon signs; all with your smartphone app remote.
          </p>
          
        </div>
        <div className="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
          {/* <!-- <img src="images/about/images2.jpg" className="img-fluid" alt="about"> --> */}
          <div className="iframe-container">
          <iframe width="560" height="315" title='About Neon Video'
            src="https://www.youtube.com/embed/_MvYm9AKBTQ?autoplay=0&loop=1&playlist=_MvYm9AKBTQ">
            </iframe>
          </div>
        </div>

      </div>
    </div>

   </section>
    </>
  )
}

export default AboutNeon
