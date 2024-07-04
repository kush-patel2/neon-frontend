import React from "react";
import "../../assets/css/aboutneon.css";

const MulticolorNeon = () => {
  return (
    <>
      <section id="introduction" className="about_wrapper">
        <div className="container">
          <div className="row flex-lg-row flex-column-reverse justify-content-center">
            <div className="col-lg-6 mb-4 mb-lg-0  text-center">
              {/* <!-- <img src="images/about/images2.jpg" className="img-fluid" alt="about"> --> */}
              <div className="iframe-container">
                <iframe
                  width="560"
                  height="315"
                  title="multicolor-iframe"
                  src="https://www.youtube.com/embed/ET80h8ZNKvQ?autoplay=0&loop=1&playlist=ET80h8ZNKvQ"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 text-center ps-lg-4 text-lg-start">
              <h6 className="sub_head">
                Experience the rainbow with MultiColor Neon
              </h6>
              <h3 className="s_head">About MultiColor Neon</h3>
              <p className="h_body">
                Multi-Color Neon offers a dazzling array of hues that can create
                a unique, eye-catching atmosphere for any occasion, from parties
                to business events, showcasing a spectrum of colors that's sure
                to impress and inspire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MulticolorNeon;
