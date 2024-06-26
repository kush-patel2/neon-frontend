import React from "react";
import '../../assets/css/aboutneon.css'
import { FaAngleRight } from "react-icons/fa";

const Homegallery = () => {
  return (
    <div>
      <section id="projects">
        <div class="container" id="works">
          <div class="row">
            <div class="col-lg-6 col-md-12 cnt_head">
              <span class="sub_head">Discover the Radiance of Art</span>
              <h2 class="s_head">Neon Gallery</h2>
              <p class="h_body">
                Step into a world of illuminated art at Neon11, where vibrant
                neon lighting enhances the beauty of each carefully curated
                piece.
              </p>
            </div>
          </div>

          <div
            id="container"
            class="isotope row ml-0"
            style={{justifyContent: "space-evenly", position: "relative", width: "1110px", height: "465.031px"}}
          >
            <div
              class="grid-item col-lg-4 col-md-6 FiltImg"
              data-filter="led"
              style={{position: "absolute", left: "0px", top: "0px"}}
              data-page="1"
            >
              <div class="featureCol w-100 mb-5">
                <div>
                  <div class="imgHolder position-relative w-100 overflow-hidden">
                    <img
                      src="/images/Gallery/1.png"
                      alt="image description"
                      class="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grid-item col-lg-4 col-md-6 FiltImg"
              data-filter="led"
              style={{position: "absolute", left: "370px", top: "0px"}}
              data-page="1"
            >
              <div class="featureCol w-100 mb-5">
                <div>
                  <div class="imgHolder position-relative w-100 overflow-hidden">
                    <img
                      src="/images/Gallery/2.png"
                      alt="image description"
                      class="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grid-item col-lg-4 col-md-6 FiltImg"
              data-filter="led"
              style={{position: "absolute", left: "740px", top: "0px"}}
              data-page="1"
            >
              <div class="featureCol w-100 mb-5">
                <div>
                  <div class="imgHolder position-relative w-100 overflow-hidden">
                    <img
                      src="/images/Gallery/3.png"
                      alt="image description"
                      class="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="grid-item col-12 pr-4 mb-md-5 mb-5 FiltImg"
              data-filter="led"
              style={{position: "absolute", left: "0px", top: "304px", width:"100%"}}
              data-page="1"
            >
              <div class="featureCol w-100 mb-5 me-0 d-flex justify-content-end">
                <div>
                  <div class="text-right">
                    <a
                      id="viewgallery"
                      href="/Home/Gallery"
                      class="button_main btn mb-3"
                    >
                      View more&nbsp;&nbsp;
                      <FaAngleRight className="arrow_go"/>
                      {/* <i class="fas fa-angle-right arrow_go"></i> */}
                    </a>
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
