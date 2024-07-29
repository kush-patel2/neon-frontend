import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <section className="ftr_btm">
        <div className="container">
          <div className="row copyright">
            <div className=" col-md-6  copyright-left">
              <h6>
                <Link to="/">Neon Creative Concept 11</Link>{" "}
                &nbsp;| All rights reserved.
              </h6>
            </div>
            <div className="col-md-6    copyright-right">
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
