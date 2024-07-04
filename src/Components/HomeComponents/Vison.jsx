import React from "react";
import '../../assets/css/aboutneon.css'
import { FaBookmark } from "react-icons/fa6";
import { FaChartLine, FaChartPie } from "react-icons/fa";

const Vison = () => {
  return (
    <div>
      <section id="vmv">
        <div className="container">
          <div className="row row_vmv">
            <div className="col-lg-4 vmv">
              <div className="vmv_cnt">
                <div className="p-2">
                  <h6>
                  <FaBookmark />&nbsp;&nbsp;Vision
                  </h6>
                </div>
                <div className="p-2">
                  We believe in the value and respect for people and companies,
                  with whom we work as a trusted partner by sharing skills and
                  objectives.
                </div>
              </div>
            </div>
            <div className="col-lg-4 vmv">
              <div className="vmv_cnt">
                <div className="p-2">
                  <h6>
                  <FaChartLine />&nbsp;&nbsp;Mission
                  </h6>
                </div>
                <div className="p-2">
                  {" "}
                  The passion in our work and in innovation guides us towards
                  solutions designed to grow together.
                </div>
              </div>
            </div>
            <div className="col-lg-4 vmv">
              <div className="vmv_cnt">
                <div className="p-2">
                  <h6>
                  <FaChartPie />&nbsp;&nbsp;Value
                  </h6>
                </div>
                <div className="p-2">
                  {" "}
                  Our products are based on the value and reliability of Made in
                  India, interpreting every need connected to the sectors of
                  visual communication, lighting, art, design, and sanitation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vison;
