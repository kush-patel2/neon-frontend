import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./Carousel.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-wrapper">
        <div className="fixed-buttons">
        <button className="contact-button">Contact Us</button>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </div>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="images/Carousel/1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="images/Carousel/2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="images/Carousel/4.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Carousel;

{/* <div class="row">
  <div
    class="col-md-12 d-flex px-4 justify-content-between cvr-ftr align-items-center flex-wrap"
    style="z-index: 9;"
  >
    <div class="p-2 ftr-pr d-flex flex-row justify-content-between">
      <a
        href="#contact"
        class="button_main btn mb-0"
        style="border: 1px solid #ff1744; padding: 8px 16px;"
      >
        Contact US
      </a>
    </div>
    <div class="p-2 ftr-sc d-flex flex-row justify-content-between">
      <a
        href="https://www.facebook.com/neoncreativeconcept11/"
        target="_blank"
        class="ml-2"
      >
        <i class="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://instagram.com/neon_creative_concept11?utm_medium=copy_link"
        target="_blank"
        class="ml-2"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a
        href="https://wa.me/919724467687/?text=Neon Creative Concept 11"
        target="_blank"
        class="ml-2"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</div>; */}
