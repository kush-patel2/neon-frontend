import React from "react";
import "../../assets/css/aboutus.css";
import { FaGlobeAsia, FaServer, FaShieldAlt } from "react-icons/fa";
import { LuBarChart3 } from "react-icons/lu";

const Aboutsection = (props) => {
  return (
    <div>
      <section id="introduction">
        <div class="container">
          <div class="row justify-content-center icont">
            <div class="col-lg-6 col-md-12 in_img align-self-center">
              <img
                src={`images/${props.image}`}
                class="img-fluid"
                alt="in_img"
              />
            </div>
            <div class="col-lg-6 col-md-12 align-items-center">
              <span class="sub_head">About Neon Creative Concept 11</span>
              <h2 class="s_head">About Us</h2>
              <p class="h_body">
                We are specialised in customised neo lighting. We create any
                Custom Sign Boards for Home, Shop, office.{" "}
              </p>
              <div class="row">
                <div class="icard col-sm-6">
                  <div class="card c2 p-0 mt-1 custom_c">
                    <div class="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div class="p-2">
                        <div class="card-title">
                          <FaServer style={{ color: "#43e97b" }} />
                        </div>
                      </div>
                      <div class="crd_bdy">
                        <p class="card-text">
                          We Design Your Neon Projects with Our Expertise
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="icard col-sm-6">
                  <div class="card c3 p-0 mt-1">
                    <div class="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div class="p-2">
                        <div class="card-title">
                          <FaShieldAlt style={{ color: "#21D4FD" }} />
                        </div>
                      </div>
                      <div class="crd_bdy">
                        <p class="card-text">
                          We Create No Burnout And No Short Circuit Neon Lights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="icard col-sm-6">
                  <div class="card c1 p-0 mt-1">
                    <div class="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div class="p-2">
                        <div class="card-title">
                          <FaGlobeAsia style={{ color: "#FF2525" }} />
                        </div>
                      </div>
                      <div class="crd_bdy">
                        <p class="card-text">
                          We Create Made In India Quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="icard col-sm-6">
                  <div class="card c4 p-0 mt-1">
                    <div class="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div class="p-2">
                        <div class="card-title">
                          <LuBarChart3
                            style={{ color: "#7F00FF", fontSize: "35px" }}
                          />
                        </div>
                      </div>
                      <div class="crd_bdy">
                        <p class="card-text">
                          We Provide Our High Expertise And Skills
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mt-5">
              <p
                class="h_body"
                
              ></p>
              <p>
                We believe in the value and respect for people and companies,
                with whom we work as a trusted partner by sharing skills and
                objectives. Our products are based on the value and reliability
                of Made in India, interpreting every need connected to the
                sectors of visual communication, lighting, art, design, and
                sanitation. The passion in our work and in innovation guides us
                towards solutions designed to grow together.
              </p>{" "}
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutsection;
