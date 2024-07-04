import React from "react";
import '../../assets/css/neonsign.css'

const NeonDesc = (props) => {
    console.log(props.links);
  return (
    <div>
      <section id="project_detail">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-sm-12 col-md-12 justify-content-center">
              <h2>{props.head}</h2>
              <p></p>
              <p>
                {props.p1}
              </p>
              <p>
                {props.p2}
              </p>
              <p></p>

              <section id="news">
                <div className="container">
                  <div className="row mt-3">
                    {props.links.map((link, index)=>{
                        console.log("From", link);
                        return (
                          <div className="col-lg-4 col-md-6 col-sm-12 bl_sec mb-3" key={index}>
                            <div className="card">
                              <div className="bl_img">
                                <iframe
                                  width="310"
                                  height="200"
                                  src={link.link}
                                  title="YouTube video player"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen=""
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        );
                    })}
                    
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeonDesc;
