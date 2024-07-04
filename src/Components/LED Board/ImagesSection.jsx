import React from "react";
import "../../assets/css/ledboard.css";

const ImagesSection = ({head, sub_head, images}) => {
  return (
    <div>
      <section id="project_detail">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-sm-12 col-md-12">
              <h2>{head}</h2>
              <p></p>
              <p>{sub_head}</p>
              <p></p>
              <div className="pd_inner_cnt row">
                {images.map((image, index)=>{
                    console.log("From", image);
                    return(
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <img
                    src={image.image}
                    className="img-fluid"
                    alt="project_image"
                  />
                </div>
                    )
                })}
                {/* <div className="col-lg-4 col-md-6 mb-4">
                  <img
                    src="images/LED/Acrylic/1.png"
                    className="img-fluid"
                    alt="project_image"
                  />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <img
                    src="images/LED/Acrylic/2.png"
                    className="img-fluid"
                    alt="project_image"
                  />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <img
                    src="images/LED/Acrylic/3.png"
                    className="img-fluid"
                    alt="project_image"
                  />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <img
                    src="images/LED/Acrylic/4.png"
                    className="img-fluid"
                    alt="project_image"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagesSection;
