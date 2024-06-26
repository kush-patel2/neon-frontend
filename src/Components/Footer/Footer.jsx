import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <section class="ftr_btm">
        <div class="container">
          <div class="row copyright">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 copyright-left">
              <h6>
                <a href="https://www.neon11.in/">Neon Creative Concept 11</a>{" "}
                &nbsp;| All rights reserved.
              </h6>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 copyright-right">
              <h6>
                Design By :{" "}
                <a target="_blank" href="https://www.barodaweb.com/">
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
