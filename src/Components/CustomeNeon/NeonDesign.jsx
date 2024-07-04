import React, { useState } from "react";
import '../../assets/css/customizesign.css'
import { FaAngleRight } from "react-icons/fa";
import { handleBackboardButtonClick, handleFontButtonClick, handleSizeButtonClick } from "../../Functions/CustomdesignFunc";

const NeonDesign = () => {
  const [customStyle, setCustomStyle] = useState({fontSize: "25px", fontFamily: "Algerian", boxShadow: "none"})
  const [customText, setCustomText] = useState("Text Show");

  const [activeSizeButton, setActiveSizeButton] = useState('small');
  const [activeFontButton, setActiveFontButton] = useState('Algerian');
  const [activeBackboardButton, setActiveBackboardButton] = useState('none');

  const handleSizeClick = handleSizeButtonClick(setCustomStyle, setActiveSizeButton);
  const handleFontClick = handleFontButtonClick(setCustomStyle, setActiveFontButton);
  const handleBackboardClick = handleBackboardButtonClick(setCustomStyle, setActiveBackboardButton);



  const [qty, setQty] = useState(1);
  const increment = () => {
    if(qty<10){
      setQty(qty+1);
    }
  }
  const decrement = () => {
    if(qty>1){
      setQty(qty-1);
    }
  }
  return (
    <div>
      <section id="Design-Neon pt-0">
        <div className="container dyn_bdy">
          <div className="row">
            <div className="col-md-6">
              <div className="form-groupp" style={{position: "sticky",top: "0"}}>
                <div id="MyDiv">
                  <img
                    src="images/sofa.jpg"
                    className="img-fluid"
                    alt="project_image"
                    style={{opacity: "0.8", width:"540px"}}
                  />
                  <div
                    id="myDIVTag"
                    className="overlay-texts-white"
                    style={customStyle}
                  >
                    {customText}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 cntc_form">
              <div className="container">
                <form>
                  <div className="row">
                    <div className="col-md-12 ">
                      <h1>Customize FloRO Sign</h1>
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
                        onChange={(e)=>{setCustomText(e.target.value)}}
                      ></textarea>
                    </div>
                  </div>
                  <hr style={{backgroundColor: "rgb(188, 188, 188)"}} />

                  <div className="row mt-3 justify-content-center">
                    <div className="col-md-12 align-self-center">
                      <label for="input">Pick Your Size</label>
                    </div>
                  </div>

                  <div className="row mt-1">
                    <div className="col-md-4 col-xs-3 align-self-center">
                      <button
                        type="button"
                        data-size="1"
                        id="btnsmall"
                        className={`button_main btn font-size-btn w-100 ${activeSizeButton === 'small' ? 'active' : ''}`}
                        onClick={() => handleSizeClick('25px', 'small')}
                      >
                        Small
                      </button>
                    </div>
                    <div className="col-md-4 col-xs-3 align-self-center">
                      <button
                        type="button"
                        className={`button_main btn font-size-btn w-100 ${activeSizeButton === 'medium' ? 'active' : ''}`}
                        data-size="2"
                        onClick={() => handleSizeClick('32px', 'medium')}
                      >
                        Medium
                      </button>
                    </div>
                    <div className="col-md-4 col-xs-3 align-self-center">
                      <button
                        type="button"
                        className={`button_main btn font-size-btn w-100 ${activeSizeButton === 'large' ? 'active' : ''}`}
                        data-size="3"
                        onClick={() => handleSizeClick('40px', 'large')}
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
                        className={`button_mains btn ${activeFontButton === 'AlexaStdRegular' ? 'active' : ''}`}
                        id="btnfont1"
                        style={{fontFamily:'AlexaStdRegular'}}
                        onClick={() => handleFontClick('AlexaStdRegular', 'AlexaStdRegular')}
                        >                      
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'AlluraRegular' ? 'active' : ''}`}
                        style={{fontFamily:"AlluraRegular"}}
                        onClick={() => handleFontClick('AlluraRegular', 'AlluraRegular')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'AnandaBlackPersonal' ? 'active' : ''}`}
                        style={{fontFamily:"AnandaBlackPersonal"}}
                        onClick={() => handleFontClick('AnandaBlackPersonal', 'AnandaBlackPersonal')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'AnandaPersonal' ? 'active' : ''}`}
                        style={{fontFamily:"AnandaPersonal"}}
                        onClick={() => handleFontClick('AnandaPersonal', 'AnandaPersonal')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'Autography' ? 'active' : ''}`}
                        style={{fontFamily:"Autography"}}
                        onClick={() => handleFontClick('Autography', 'Autography')}

                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'Belinda Carolyne' ? 'active' : ''}`}
                        style={{fontFamily:"Belinda Carolyne"}}
                        onClick={() => handleFontClick('Belinda Carolyne', 'Belinda Carolyne')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                    <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'BirdsOfParadise' ? 'active' : ''}`}
                        style={{ fontFamily: "BirdsOfParadise" }}
                        onClick={() => handleFontClick('BirdsOfParadise', 'BirdsOfParadise')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'Bostante' ? 'active' : ''}`}
                        style={{ fontFamily: "Bostante" }}
                        onClick={() => handleFontClick('Bostante', 'Bostante')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'BrittanySignature' ? 'active' : ''}`}
                        style={{fontFamily:"BrittanySignature"}}
                        onClick={() => handleFontClick('BrittanySignature', 'BrittanySignature')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'Algerian' ? 'active' : ''}`}
                        style={{fontFamily:"Algerian"}}
                        onClick={() => handleFontClick('Algerian', 'Algerian')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'BuffaloItalic1' ? 'active' : ''}`}
                        style={{fontFamily:"BuffaloItalic1"}}
                        onClick={() => handleFontClick('BuffaloItalic1', 'BuffaloItalic1')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'BuffaloInline2Grunge' ? 'active' : ''}`}
                        style={{fontFamily:"BuffaloInline2Grunge"}}
                        onClick={() => handleFontClick('BuffaloInline2Grunge', 'BuffaloInline2Grunge')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'Buffalo1' ? 'active' : ''}`}
                        style={{fontFamily:"Buffalo1"}}
                        onClick={() => handleFontClick('Buffalo1', 'Buffalo1')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'chemistry' ? 'active' : ''}`}
                        style={{fontFamily:"chemistry"}}
                        onClick={() => handleFontClick('chemistry', 'chemistry')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'DancingScript3j68' ? 'active' : ''}`}
                        style={{fontFamily:"DancingScript3j68"}}
                        onClick={() => handleFontClick('DancingScript3j68', 'DancingScript3j68')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'Dancingscriptot' ? 'active' : ''}`}
                        style={{fontFamily:"Dancingscriptot"}}
                        onClick={() => handleFontClick('Dancingscriptot', 'Dancingscriptot')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'DancingTimeDemoRegular' ? 'active' : ''}`}
                        style={{fontFamily:"DancingTimeDemoRegular"}}
                        onClick={() => handleFontClick('DancingTimeDemoRegular', 'DancingTimeDemoRegular')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'Daytonica' ? 'active' : ''}`}
                        style={{fontFamily:"Daytonica"}}
                        onClick={() => handleFontClick('Daytonica', 'Daytonica')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'FeelingPassionate' ? 'active' : ''}`}
                        style={{fontFamily:"FeelingPassionate"}}
                        onClick={() => handleFontClick('FeelingPassionate', 'FeelingPassionate')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'GreatVibesRegular' ? 'active' : ''}`}
                        style={{fontFamily:"GreatVibesRegular"}}
                        onClick={() => handleFontClick('GreatVibesRegular', 'GreatVibesRegular')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'Neoneon' ? 'active' : ''}`}
                        style={{fontFamily:"Neoneon"}}
                        onClick={() => handleFontClick('Neoneon', 'Neoneon')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'OnestySignature' ? 'active' : ''}`}
                        style={{fontFamily:"OnestySignature"}}
                        onClick={() => handleFontClick('OnestySignature', 'OnestySignature')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'OnestySignature1' ? 'active' : ''}`}
                        style={{fontFamily:"OnestySignature1"}}
                        onClick={() => handleFontClick('OnestySignature1', 'OnestySignature1')}
                      >
                        ABC
                      </button>
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'pirulenrg' ? 'active' : ''}`}
                        style={{fontFamily:"pirulenrg"}}
                        onClick={() => handleFontClick('pirulenrg', 'pirulenrg')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 align-self-center">
                      <button
                        type="button"
                        className={`button_mains btn ${activeFontButton === 'RocketClouds' ? 'active' : ''}`}
                        style={{fontFamily:"RocketClouds"}}
                        onClick={() => handleFontClick('RocketClouds', 'RocketClouds')}
                      >
                        ABC
                      </button>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12 align-self-center">
                      <label for="input">Pick Your Backboard</label>
                    </div>
                  </div>

                  <div className="row mt-1">
                    <div className="col-md-12 col-lg-6 col-12 align-self-center">
                      <button
                        type="button"
                        className={`button_s btn ${activeBackboardButton === 'square' ? 'active' : ''}`}
                        id="btnbox1"
                        
                        onClick={() => handleBackboardClick('rgba(0, 0, 0, 0.5) 1px 1px 7px', 'square')}
                      >
                        <img src="/images/Design/box2.png" alt="img"/>
                      </button>
                    </div>
                    <div className="col-md-12 col-lg-6 col-12 align-self-center">
                      <button
                        type="button"
                        className={`button_s btn ${activeBackboardButton === 'cut to letter' ? 'active' : ''}`}
                        id="btnbox2"
                        onClick={() => handleBackboardClick('none', 'cut to letter')}
                      >
                        <img src="/images/Design/box1.png" alt="img"/>
                      </button>
                    </div>
                  </div>

                  <hr style={{backgroundColor: "rgb(188, 188, 188)"}} />

                  <div className="row mt-3">
                    <div className="col-md-2 align-self-center">
                      <input
                        type="checkbox"
                        id="Is120Controller"
                        onchange="calculate()"
                      />
                    </div>
                    <div className="col-md-7 align-self-center">
                      <label for="myInputText">
                        Neon FloRo 120+ Wifi Smart App Controller 1500.00 Rs.
                      </label>
                    </div>
                  </div>

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
                        Neon FloRo 220+ Wifi Smart App Controller 2500.00 Rs.
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-2 align-self-center">
                      <label for="quantity">Quantity</label>
                    </div>
                    <div className="col-md-5 align-self-center">
                      <div className="counter-container">
                        <button
                          type="button"
                          className="counter-button"
                          onClick={()=>decrement()}
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
                          value={qty}
                          onchange="calculate()"
                          style={{paddingLeft: "12px"}}
                        />
                        <button
                          type="button"
                          className="counter-button"
                          onClick={()=>increment()}
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
  );
};

export default NeonDesign;
