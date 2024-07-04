import React from "react";
import '../../assets/css/aboutneon.css'
import { FaGlobeAsia, FaServer, FaShieldAlt } from "react-icons/fa";
import { LuBarChart3 } from "react-icons/lu";

const Aboutushome = () => {
  return (
    <div>
      <section id="introduction">
        <div className="container">
          <div className="row justify-content-center icont">
            <div className="col-lg-6 col-md-12 in_img align-self-center">
              
              <img src="images/about.png" className="img-fluid" alt="in_img" />
              
            </div>
            <div className="col-lg-6 col-md-12 align-items-center">
              <span className="sub_head">About Neon Creative Concept 11</span>
              <h2 className="s_head">About Us</h2>
              <p className="h_body">
                We are specialised in customised neo lighting. We create any
                Custom Sign Boards for Home, Shop, office.{" "}
              </p>
              <div className="row">
                <div className="icard col-sm-6">
                  <div className="card c2 p-0 mt-1 custom_c">
                    <div className="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div className="p-2">
                        <div className="card-title">
                        <FaServer style={{color: "#43e97b"}}/>
                        </div>
                      </div>
                      <div className="crd_bdy">
                        <p className="card-text">
                          We Design Your Neon Projects with Our Expertise
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="icard col-sm-6">
                  <div className="card c3 p-0 mt-1">
                    <div className="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div className="p-2">
                        <div className="card-title">
                        <FaShieldAlt style={{color:"#21D4FD"}}/>

                        </div>
                      </div>
                      <div className="crd_bdy">
                        <p className="card-text">
                          We Create No Burnout And No Short Circuit Neon Lights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="icard col-sm-6">
                  <div className="card c1 p-0 mt-1">
                    <div className="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div className="p-2">
                        <div className="card-title">
                        <FaGlobeAsia style={{color:"#FF2525"}}/>
                        </div>
                      </div>
                      <div className="crd_bdy">
                        <p className="card-text">
                          We Create Made In India Quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="icard col-sm-6">
                  <div className="card c4 p-0 mt-1">
                    <div className="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div className="p-2">
                        <div className="card-title">
                        <LuBarChart3 style={{color:"#7F00FF", fontSize:"35px"}}/>
                        </div>
                      </div>
                      <div className="crd_bdy">
                        <p className="card-text">
                          We Provide Our High Expertise And Skills
                        </p>
                      </div>
                    </div>
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

export default Aboutushome;
