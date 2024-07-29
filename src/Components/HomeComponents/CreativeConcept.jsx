import React from "react";
import '../../assets/css/aboutneon.css'
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CreativeConcept = () => {
  return (
    <div className="footer" id="footer">
      <div className="container ftr_main">
        <div className="row">
          {/* <!--Start Newsletter--> */}
          <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 align-self-center mb-2">
            <div className="ftr_brand row">
              <Link to="/" className="col-2 pt-1">
                <img
                  src="/images/logo.png"
                  height="50"
                  alt="logo"
                />
                
              </Link>
              <Link to="/" className="col-10">
              Neon Creative Concept 11
              </Link>
            </div>
            <div className="ftr_intro">
              <p>
                We build results-oriented brand strategies and continually
                refine your campaingns for the greatest outcome.
              </p>
            </div>
            <div
              className="ftr_bdy"
              style={{padding: "23px 30px 23px 30px", textAlign:"center"}}
            >
              <div className="ftr_cnt">
                <div className="ftr_lnk_sc">
                  {/* <!--<a href="#"><i className="fab fa-twitter"></i></a>--> */}
                  <a
                    href="https://www.facebook.com/neoncreativeconcept11/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>  
                  <a
                    href="https://instagram.com/neon_creative_concept11?utm_medium=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  {/* <!--<a href="#"><i className="fab fa-youtube"></i></a>--> */}
                  <a
                    href="https://wa.me/919724467687/?text=Neon Creative Concept 11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="fab" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Newsletter--> */}
          {/* <!--Start Footer Objectives--> */}
          <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 ftr_bdy align-self-center">
            <div className="ftr_cnt ml-3 mr-3 d-flex flex-row justify-content-between flex-wrap">
              <div className="ftr_clb">
                <span className="ftr_clb_t1">Have an idea?</span>
                <br />
                <span className="ftr_clb_t2">
                  We love to collab with creatives &amp; innovatives. Let's do
                  work together!
                </span>
                <br />
              </div>
              <div className="ftr_lnk d-flex flex-column">
                <div className="ftr_lnk_cmp mt-4 ml-auto">
                  <span className="ftr_lnk_head">Quick Links</span>
                  <br />
                  <span className="ftr_lnk_bdy">
                    <Link to="/aboutus">About Us</Link>
                  </span>
                  <br />
                  <span className="ftr_lnk_bdy">
                    <Link to="/neonfloro">Neon Signs</Link>
                  </span>
                  <br />
                  <span className="ftr_lnk_bdy">
                    <Link to="/neongo">Neon Go</Link>
                  </span>
                  <br />
                  <span className="ftr_lnk_bdy">
                    <Link to="/custom-multicolor">Customize Sign</Link>
                  </span>
                  <br />
                  <span className="ftr_lnk_bdy">
                    <Link to="/gallery">Gallery</Link>
                  </span>
                  <br />
                  <span className="ftr_lnk_bdy">
                    <Link to="/contactus">Contact Us</Link>
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
