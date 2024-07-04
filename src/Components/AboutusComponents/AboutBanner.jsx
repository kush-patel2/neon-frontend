import React from "react";
import "../../assets/css/aboutus.css";
import { Link } from "react-router-dom";

const AboutBanner = (props) => {
  return (
    <div>
      <section id="cover">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 align-self-center">
              <h1 className="wrapper_head">{props.head}</h1>
              <h5 className="wrapper_nav">
                <span>
                  <Link to="/" className="wrapper_nav_link">
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
