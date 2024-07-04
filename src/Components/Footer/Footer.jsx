import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <section className="ftr_btm">
        <div className="container">
          <div className="row copyright">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 copyright-left">
              <h6>
                <Link to="/">Neon Creative Concept 11</Link>{" "}
                &nbsp;| All rights reserved.
              </h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 copyright-right">
              <h6>
                Design By :{" "}
                <a
                  href="https://www.barodaweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Barodaweb | The E-catalogue Designer.
                </a>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
