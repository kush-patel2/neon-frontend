import React from "react";
import "../../assets/css/aboutus.css";
import { Link } from "react-router-dom";

const AboutBanner = (props) => {
  return (
    <div>
      <section id="cover">
        <div class="container">
          <div class="row pt-5 pb-5">
            <div class="col-lg-6 align-self-center">
              <h1 class="wrapper_head">{props.head}</h1>
              <h5 class="wrapper_nav">
                <span>
                  <Link to="/" class="wrapper_nav_link">
                    Home
                  </Link>
                </span>
                &nbsp;&nbsp;/&nbsp;&nbsp;<span>{props.sub_head}</span>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBanner;
