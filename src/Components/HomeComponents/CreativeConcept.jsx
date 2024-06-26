import React from "react";
import '../../assets/css/aboutneon.css'
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const CreativeConcept = () => {
  return (
    <div className="footer" id="footer">
      <div class="container ftr_main">
        <div class="row">
          {/* <!--Start Newsletter--> */}
          <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 align-self-center">
            <div class="ftr_brand">
              <a href="/">
                <img
                  src="/images/logo.png"
                  height="40"
                  alt="logo"
                />
                &nbsp;&nbsp;Neon Creative Concept 11
              </a>
            </div>
            <div class="ftr_intro">
              <p>
                We build results-oriented brand strategies and continually
                refine your campaingns for the greatest outcome.
              </p>
            </div>
            <div
              class="ftr_bdy"
              style={{padding: "23px 30px 23px 30px", textAlign:"center"}}
            >
              <div class="ftr_cnt">
                <div class="ftr_lnk_sc">
                  {/* <!--<a href="#"><i class="fab fa-twitter"></i></a>--> */}
                  <a
                    href="https://www.facebook.com/neoncreativeconcept11/"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>  
                  <a
                    href="https://instagram.com/neon_creative_concept11?utm_medium=copy_link"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  {/* <!--<a href="#"><i class="fab fa-youtube"></i></a>--> */}
                  <a
                    href="https://wa.me/919724467687/?text=Neon Creative Concept 11"
                    target="_blank"
                  >
                    <FaWhatsapp className="fab" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Newsletter--> */}
          {/* <!--Start Footer Objectives--> */}
          <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 ftr_bdy align-self-center">
            <div class="ftr_cnt ml-3 mr-3 d-flex flex-row justify-content-between flex-wrap">
              <div class="ftr_clb">
                <span class="ftr_clb_t1">Have an idea?</span>
                <br />
                <span class="ftr_clb_t2">
                  We love to collab with creatives &amp; innovatives. Let's do
                  work together!
                </span>
                <br />
              </div>
              <div class="ftr_lnk d-flex flex-column">
                <div class="ftr_lnk_cmp mt-4 ml-auto">
                  <span class="ftr_lnk_head">Quick Links</span>
                  <br />
                  <span class="ftr_lnk_bdy">
                    <a href="/Home/AboutUs">About Us</a>
                  </span>
                  <br />
                  <span class="ftr_lnk_bdy">
                    <a href="/Home/Neonsign/8">Neon Signs</a>
                  </span>
                  <br />
                  <span class="ftr_lnk_bdy">
                    <a href="/Home/NeonGo">Neon Go</a>
                  </span>
                  <br />
                  <span class="ftr_lnk_bdy">
                    <a href="/Home/CustomizeSinglecolor">Customize Sign</a>
                  </span>
                  <br />
                  <span class="ftr_lnk_bdy">
                    <a href="/Home/Gallery">Gallery</a>
                  </span>
                  <br />
                  <span class="ftr_lnk_bdy">
                    <a href="/Home/Contact">Contact Us</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Start Footer Objectives--> */}
        </div>
      </div>
    </div>
  );
};

export default CreativeConcept;
