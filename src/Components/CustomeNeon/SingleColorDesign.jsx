import React from 'react'
import '../../assets/css/customizesign.css'

import { FaAngleRight } from "react-icons/fa";

const SingleColorDesign = () => {
  return (
    <div>
      <section id="Design-Neon" className="Design-Neon pt-0">
        <div className="container dyn_bdy2">
          <div className="row">
             <div className="col-md-6 ps-5"> {/*  */}
              <div className="form-groupp" style={{position: "sticky",top: "0"}}>
                <div id="MyDiv">
                  <img
                    src="images/wall.png"
                    className="img-fluid"
                    alt="project_image"
                    style={{opacity: "0.8", width:"540px"}}
                  />
                  <div
                    id="myDIVTag"
                    className="overlay-texts-white3"
                    style={{fontSize: "25px", fontFamily: "Algerian"}}
                  >
                    Text Show
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 cntc_form ps-4 form-color">
              <div className="container">
                <form>
                  <div className="row">
                    <div className="col-md-12 pe-5 ">  {/* */}
                      <h1>Customize Your Lights</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <p>Size Measurement</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ">
                      Width:{" "}
                      <span name="width" id="width">
                        {" "}
                        0{" "}
                      </span>{" "}
                      Inch.
                    </div>

                    <div className="col-md-5 ">
                      Height:{" "}
                      <span name="height" id="height">
                        {" "}
                        0{" "}
                      </span>{" "}
                      Inch.
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ">
                      Price:{" "}
                      <span name="total_price1" id="total-price1">
                        {" "}
                        0{" "}
                      </span>{" "}
                      Rs.
                      <span id="PrdPrice" style={{display:"none"}}></span>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12 mt-4">
                      <label for="input">Type Your Text</label>
                      <textarea
                        id="input"
                        type="text"
                        onkeyup="calculate()"
                        className="form-control mt-2"
                        placeholder="Text Show"
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <hr style={{backgroundColor: "rgb(188, 188, 188)"}} />

                  <div className="row mt-3">
                    <div className="col-md-12 align-self-center">
                      <label for="input">Pick Your Size</label>
                    </div>
                  </div>

                  <div className="row mt-1">
                    <div className="col-md-4 align-self-center">
                      <button
                        type="button"
                        className="button_main btn font-size-btn active w-75"
                        data-size="1"
                        id="btnsmall"
                        onclick="document.getElementById('myDIVTag').style.fontSize ='25px';updateButton(1)}"
                      >
                        Small
                      </button>
                    </div>
                    <div className="col-md-4 align-self-center">
                      <button
                        type="button"
                        className="button_main btn inactive font-size-btn w-75"
                        data-size="2"
                        onclick="document.getElementById('myDIVTag').style.fontSize ='32px';updateButton(2)"
                      >
                        Medium
                      </button>
                    </div>
                    <div className="col-md-4 align-self-center">
                      <button
                        type="button"
                        className="button_main btn inactive font-size-btn w-75 "
                        data-size="3"
                        onclick="document.getElementById('myDIVTag').style.fontSize ='40px';updateButton(3)"
                      >
                        Large
                      </button>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12 align-self-center">
                      <label for="input">Pick Your Font</label>
                    </div>
                  </div>

                  <div className="row mt-1 center-block">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn active"
                        id="btnfont1"
                        style={{fontFamily:'AlexaStdRegular'}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily = 'AlexastyleRegular'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"AlluraRegular"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='AlluraRegular'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"AnandaBlackPersonal"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='AnandaBlackPersonal'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"AnandaPersonal"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='AnandaPersonal'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"Autography"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='AutographyDOLnW'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"Belinda Carolyne"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='BelindaCarolynex3n8R'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"BirdsOfParadise"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='BirdsOfParadisePersonalUseOnly'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"Bostante"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='Bostante'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"BrittanySignature"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='BrittanySignature'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"BuffaloItalic"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='BuffaloItalic'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"BuffaloItalic1"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='BuffaloItalic1'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"BuffaloInline2Grunge"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='Buffalo'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"Buffalo1"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='Buffalo1'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"chemistry"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='ChemistryEa8re'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"DancingScript3j68"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='DancingScript3j68'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"Dancingscriptot"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='Dancingscriptot'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"DancingTimeDemoRegular"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='DancingTimeDemoRegular'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"Daytonica"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='Daytonica'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"FeelingPassionate"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='FeelingPassionate'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"GreatVibesRegular"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='GreatVibesRegular'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"Neoneon"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='Neoneon'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"OnestySignature"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='OnestySignature'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"OnestySignature"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='OnestySignature'"
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"pirulenrg"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='pirulenrg'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className="button_mains btn"
                        style={{fontFamily:"RocketClouds"}}
                        onclick="document.getElementById('myDIVTag').style.fontFamily ='RocketClouds'"
                      >
                        ABC
                      </button>
                    </div>
                  </div>

                  <div class="row mt-3">
                            <div class="col-md-12 align-self-center">
                                <label for="myInputText">Select Your Color</label>
                            </div>
                        </div>

                        <div class="row mt-1">
                            <div class="col-md-12 align-self-center">

                                <button type="button" class="circle-red colors me-2" onclick="document.getElementById('myDIVTag').style.color ='red';document.getElementById('myDIVTag').style.textShadow='0 0 5px red'"></button>
                                <button type="button" class="circle-pink colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(255, 0, 238)';document.getElementById('myDIVTag').style.textShadow='0 0 5px #FF00EE'"></button>
                                <button type="button" class="circle-green colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(34, 255, 0)';document.getElementById('myDIVTag').style.textShadow='0 0 5px #22FF00'"></button>
                                <button type="button" class="circle-blue colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(0, 17, 255)';document.getElementById('myDIVTag').style.textShadow='0 0 5px #0011FF'"></button>
                                <button type="button" class="circle-purple colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(204, 0, 255)';document.getElementById('myDIVTag').style.textShadow='0 0 5px #CC00FF'"></button>
                                <button type="button" class="circle-orange colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(255, 106, 0)';document.getElementById('myDIVTag').style.textShadow='0 0 5px #FF6A00'"></button>
                                <button type="button" class="circle-white colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(255, 255, 255)';document.getElementById('myDIVTag').style.textShadow='0 0 5px #FFFFFF'"></button>
                                <button type="button" class="circle-yellow colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(251, 255, 0)';document.getElementById('myDIVTag').style.textShadow='0 0 5px #FBFF00'"></button>
                                <button type="button" class="circle-iceblue colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(0, 191, 255)';document.getElementById('myDIVTag').style.textShadow='0 0 5px 	#00bfff'"></button>
                                <button type="button" class="circle-warmwhite colors me-2" onclick="document.getElementById('myDIVTag').style.color ='rgb(243, 231, 211)';document.getElementById('myDIVTag').style.textShadow='0 0 5px #f3e7d3'"></button>

                            </div>
                        </div>

                        <hr style={{backgroundColor: "rgb(188, 188, 188)"}} />
                  <div className="row mt-3">
                    <div className="col-md-12 align-self-center">
                      <label for="input">Pick Your Backboard</label>
                    </div>
                  </div>
                

                  <div className="row mt-1">
                    <div className="col-md-12 col-lg-6 col-12 align-self-center">
                      <button
                        type="button"
                        className="button_s btn inactive"
                        id="btnbox1"
                        onclick="AddBoxShadow()"
                      >
                        <img src="/images/Design/box2.png" />
                      </button>
                    </div>
                    <div className="col-md-12 col-lg-6 col-12 align-self-center">
                      <button
                        type="button"
                        className="button_s btn active"
                        id="btnbox2"
                        onclick="removeBoxShadow()"
                      >
                        <img src="/images/Design/box1.png" />
                      </button>
                    </div>
                  </div>

                  <hr style={{backgroundColor: "rgb(188, 188, 188)"}} />

                  

                  <div className="row mt-3">
                    <div className="col-md-2 align-self-center">
                      <input
                        type="checkbox"
                        id="Is220Controller"
                        onchange="calculate()"
                      />
                    </div>
                    <div className="col-md-10 align-self-center">
                      <label for="myInputText">
                      Singlecolor Brightnesss Controller with action mode   550.00 Rs.
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-2 align-self-center">
                      <label for="quantity">Quantity</label>
                    </div>
                    <div className="col-md-5 align-self-center">
                      <div className="counter-container input-color">
                        <button
                          type="button"
                          className="counter-button"
                          onclick="decrement()"
                        >
                          -
                        </button>
                        <input
                          className="counter-value"
                          type="tel"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max="100"
                          value="1"
                          onchange="calculate()"
                          style={{paddingLeft: "12px"}}
                        />
                        <button
                          type="button"
                          className="counter-button"
                          onclick="increment()"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr style={{backgroundColor: "rgb(188, 188, 188)"}} />

                  <div className="row mt-3">
                    <div className="col-md-5 align-self-center">
                      <h5>
                        <label for="myInputText">Shipping Charge</label>
                      </h5>
                    </div>
                    <div className="col-md-7 align-self-center">
                      <h5>
                        <label for="myInputText">00 Rs.</label>
                      </h5>
                    </div>
                    <div className="col-md-5 align-self-center">
                      <label for="input"></label> <h5>Price</h5>
                    </div>
                    <div className="col-md-7 align-self-center">
                      <label for="input"></label>
                      <h5>
                        <span id="total-price2">00</span> Rs.
                      </h5>
                    </div>
                  </div>

                  <hr style={{backgroundColor: "rgb(188, 188, 188)"}} />
                  <div className="row mt-3">
                    <div className="s1 col-md-12 align-self-center">
                      <a
                        href="#"
                        className="btn button_mainn"
                        onclick="AddInCustomeCart(39,17)"
                      >
                        Add To Cart&nbsp;&nbsp;&nbsp;
                        <FaAngleRight className="arrow_go"/>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleColorDesign
