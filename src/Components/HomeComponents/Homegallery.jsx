import React from "react";
import '../../assets/css/aboutneon.css';
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homegallery = () => {
  return (
    <div>
      <section id="projects">
        <div className="container" id="works">
          <div className="row">
            <div className="col-lg-6 col-md-12 cnt_head">
              <span className="sub_head">Discover the Radiance of Art</span>
              <h2 className="s_head">Neon Gallery</h2>
              <p className="h_body">
                Step into a world of illuminated art at Neon11, where vibrant
                neon lighting enhances the beauty of each carefully curated
                piece.
              </p>
            </div>
          </div>

          <div id="container" className="row ml-0" style={{ justifyContent: "space-evenly" }}>
            <div className="grid-item col-lg-4 col-md-6 FiltImg mb-4">
              <div className="featureCol w-100">
                <div className="imgHolder position-relative w-100 overflow-hidden">
                  <img
                    src="/images/Gallery/1.png"
                    alt="img description 1"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 FiltImg mb-4">
              <div className="featureCol w-100">
                <div className="imgHolder position-relative w-100 overflow-hidden">
                  <img
                    src="/images/Gallery/2.png"
                    alt="img description2"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 FiltImg mb-4">
              <div className="featureCol w-100">
                <div className="imgHolder position-relative w-100 overflow-hidden">
                  <img
                    src="/images/Gallery/3.png"
                    alt="img description3"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>

            <div className="grid-item col-12 pr-4 mb-5 FiltImg">
              <div className="featureCol w-100 d-flex justify-content-end">
                <div>
                  <div className="text-right">
                    <Link
                      id="viewgallery"
                      to="/gallery"
                      className="button_main2 btn mb-3"
                    >
                      View more&nbsp;&nbsp;
                      <FaAngleRight className="arrow_go" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homegallery;
