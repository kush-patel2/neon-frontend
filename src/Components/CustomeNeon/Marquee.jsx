import React from 'react'
import '../../assets/css/customizesign.css'

const Marquee = () => {
  return (
    <div>
      <section className="pb-3 pt-3">
        <div className="container">
          <div className="row marquee1">
            <div className="col-lg-12 col-md-12">
              <marquee
                width="100%"
                direction="left"
                height="50px"
                loop="true"
                scrollamount="5"
                truespeed="10"
                behaviour="scroll"
                className="marquee1"
                style={{marginTop: "20px"}}
              >
                <a href="/contactus" >
                  <span className="text-glow">
                    For more customization please contact to us on single click.
                  </span>
                </a>
              </marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Marquee
