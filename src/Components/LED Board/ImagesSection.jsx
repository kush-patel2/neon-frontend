import React from "react";
import "../../assets/css/ledboard.css";

const ImagesSection = ({head, sub_head, images}) => {
  return (
    <div>
      <section id="project_detail">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-sm-12 col-md-12">
              <h2>{head}</h2>
              <p></p>
              <p>{sub_head}</p>
              <p></p>
              <div class="pd_inner_cnt row">
                {images.map((image, index)=>{
                    console.log("From", image);
                    return(
                        <div class="col-lg-4 col-md-6 mb-4" key={index}>
                  <img
                    src={image.image}
                    class="img-fluid"
                    alt="project_image"
                  />
                </div>
                    )
                })}
                {/* <div class="col-lg-4 col-md-6 mb-4">
                  <img
                    src="images/LED/Acrylic/1.png"
                    class="img-fluid"
                    alt="project_image"
                  />
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <img
                    src="images/LED/Acrylic/2.png"
                    class="img-fluid"
                    alt="project_image"
                  />
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <img
                    src="images/LED/Acrylic/3.png"
                    class="img-fluid"
                    alt="project_image"
                  />
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <img
                    src="images/LED/Acrylic/4.png"
                    class="img-fluid"
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
