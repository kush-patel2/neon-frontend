import React from 'react'
import '../../assets/css/aboutneon.css'

const Singlecolor = () => {
  return (
    <div>
      <section id="introduction" class="about_wrapper">
    <div class="container">
      <div class="row flex-lg-row flex-column justify-content-center">
       
        <div class="col-lg-6 text-center text-lg-start">
          <h6 className='sub_head'>Light up your world!</h6>
          <h3 className='s_head'>Single color with Multiple action</h3>
          <p className='h_body'>When you hear the words ‘neon lights’, the first things that come to your mind are storefront signs. Neon lights ideal for the advertising industry because they can easily catch the attention of passersby. Neon lights usually come in the form of glass tubes which you can fabricate in different artistic shapes to create pictures of letters. They are popularly used in making multicolored and dramatic signages for advertising, widely known as neon signs.</p>
          
          
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
          {/* <!-- <img src="images/about/images2.jpg" class="img-fluid" alt="about"> --> */}

          <iframe width="560" height="315" title="singlecolor-iframe"
            src="https://www.youtube.com/embed/-YSgcg4xPbY?autoplay=0&loop=1&playlist=-YSgcg4xPbY">
            </iframe>
        </div>

      </div>
    </div>

   </section>
    </div>
  )
}

export default Singlecolor
