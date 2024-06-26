import React from "react";
import '../../assets/css/aboutneon.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 cnt_head align-self-center">
              <span class="sub_head">Feel free to contact us</span>
              <h2 class="s_head">Contact Us</h2>
              <p class="h_body">
                If you need to help with our services, have questions about our
                work or experiencing any technical difficulties, please do not
                hesitate to contact us.
              </p>
              <div class="cntc_info d-flex flex-row flex-wrap">
                <div class="cntc_info_e">
                  <div class="cntc_info_head">
                    <span>
                    <FaLocationDot />&nbsp;&nbsp;Address
                    </span>
                    <br />
                  </div>
                  <span class="cntc_info_b">
                    {" "}
                    Krishna Electricals,
                    <br />
                    203, Mangal Bazar, Pratap Margas Pole, Bajwada, Mandvi,
                    Vadodara, Gujarat 390001
                  </span>
                </div>
                <div class="cntc_info_e">
                  <div class="cntc_info_head">
                    <span>
                    <FaPhone />&nbsp;&nbsp;Phone
                    </span>
                    <br />
                  </div>
                  <span class="cntc_info_b">
                    <a href="tel:9724467687" style={{color: "#acacac", textDecoration:"none"}}>
                      +91 9724467687
                    </a>
                  </span>
                  <br />
                  {/* <!--<span class="cntc_info_b"><a href="tel:0987654321" style="color: #acacac;">+91098 7654 321</a></span>--> */}
                </div>
                <div class="cntc_info_e">
                  <div class="cntc_info_head">
                    <span>
                    <MdEmail />&nbsp;&nbsp;Email
                    </span>
                    <br />
                  </div>
                  <span class="cntc_info_b">
                    <a
                      href="mailto: bhagyesh.sheth@gmail.com"
                      style={{color: "#acacac", textDecoration:"none"}}
                    >
                      bhagyesh.sheth@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-6 col-md-12 col-sm-12 cntc_form align-self-center"
              id="Design-Your-Neon"
            >
              <iframe
                width="100%"
                height="410"
                frameborder="0"
                style={{border:"0"}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3949028737798!2d73.2067299!3d22.3009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc58aa4f07291%3A0x225feaceab9dc9ce!2sKrishna%20Electricals!5e0!3m2!1sen!2sin!4v1655287064129!5m2!1sen!2sin"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
