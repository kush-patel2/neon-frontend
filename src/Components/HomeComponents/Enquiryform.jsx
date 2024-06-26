import React from "react";
import '../../assets/css/aboutneon.css'
const Enquiryform = () => {
  return (
    <div>
      <section id="Design-Your-Neon">
        <div class="container dyn_bdy" id="validationDiv">
          <div class="row" id="form-contact">
            <div class="col-md-12 cntc_form align-self-center">
              <span class="sub_head">Fill to Create Your Custom Lights</span>
              <h2 class="s_head">Product Inquiry</h2>

              <form
                action=""
                enctype="multipart/form-data"
                id="Master_EnquiryForm"
                // method="post"
                // role="form"
                // novalidate="novalidate"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  value="IGfyu3Y5ES4xC646HDUqF9DkAhgORbWrAx7y0x0Rf9F_f9xG1rNoHjMCW_FPutLvJNFhGZ0bX4OTcfg6VRyvNBlZ3-lSeIGhBBxfRfjhRwQ1"
                />{" "}
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label className="mb-1">Name*</label>

                      <input
                        class="form-control"
                        data-error="Please enter your name"
                        data-val="true"
                        data-val-required="Please enter name."
                        id="txtName"
                        name="Name"
                        placeholder="Enter your name"
                        type="text"
                        value=""
                      />
                    </div>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="Name"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label className="mb-1">Email*</label>
                      <input
                        class="form-control"
                        data-val="true"
                        data-val-regex="Please enter a valid email address."
                        data-val-regex-pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        data-val-required="Please enter email."
                        id="txtEmail"
                        name="Email"
                        placeholder="Your email address"
                        type="text"
                        value=""
                      />
                    </div>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="Email"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label className="mb-1 mt-2">Mobile*</label>
                      <input
                        class="form-control"
                        data-val="true"
                        data-val-regex="Please enter a valid mobile number."
                        data-val-regex-pattern="^[0-9]{10}$"
                        data-val-required="Please enter mobile."
                        id="txtMobile"
                        name="Mobile"
                        placeholder="Your Mobile number "
                        type="text"
                        value=""
                      />
                    </div>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="Mobile"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label className="mb-1 mt-2">Select Product</label>
                      <select
                        class="form-control select2 Dropdowncolor"
                        data-val="true"
                        data-val-required="The ProductId field is required."
                        id="ddlProduct"
                        name="ProductId"
                      >
                        <option value="0">Select Product</option>
                        <option value="6">Neon FloRo</option>
                        <option value="7">Multicolor Neon</option>
                        <option value="8">Singlecolor Neon</option>
                        <option value="12">Acrylic Letters</option>
                        <option value="13">Led Sign Board</option>
                        <option value="14">Back Light Board</option>
                        <option value="15">Reversible Board</option>
                        <option value="16">Flex Board</option>
                        <option value="17">Backlit LED Board</option>
                      </select>
                    </div>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="ProductId"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label className="mb-1 mt-2">Message</label>
                      <textarea
                        class="form-control"
                        cols="20"
                        data-val="true"
                        data-val-required="Please enter Message."
                        id="txtMessage"
                        name="Message"
                        placeholder="Write your message..."
                        rows="2"
                      ></textarea>
                    </div>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="Message"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div class="col-md-12 text-right justify-content-end">
                  <button type="submit" id="btnsubmit" class="button_main mt-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiryform;
