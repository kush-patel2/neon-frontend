import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./Carousel.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FaAngleRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
        <div className="fixed-buttons">
        <Link to="/contactus" className="contact-button">Contact Us</Link>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </div>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="images/Carousel/1.jpg" alt="Slide 1" className="carousel-image"/>
        </div>
        <div>
          <img src="images/Carousel/2.jpg" alt="Slide 2" className="carousel-image"/>
        </div>
        <div>
          <img src="images/Carousel/4.jpg" alt="Slide 3" className="carousel-image"/>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Carousel;


