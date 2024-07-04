import React, { useState } from "react";
import "../../assets/css/imggallery.css";
import { FaEye } from "react-icons/fa";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

const ImgGallery = () => {
  const images = [
    { src: "images/Gallery/1.png", alt: "Image 1" },
    { src: "images/Gallery/2.png", alt: "Image 2" },
    { src: "images/Gallery/3.png", alt: "Image 3" },
    { src: "images/Gallery/4.jpg", alt: "Image 4" },
    { src: "images/Gallery/5.jpg", alt: "Image 5" },
    { src: "images/Gallery/6.jpg", alt: "Image 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (index) => {
    setCurrentIndex(index);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
  //show next image in lightbox
  //    const showNext = (e) => {
  //     e.stopPropagation();
  //     let currentIndex = images.indexOf(imageToShow);
  //     if (currentIndex >= images.length - 1) {
  //       setLightBoxDisplay(false);
  //     } else {
  //       let nextImage = images[currentIndex + 1];
  //       setImageToShow(nextImage);
  //     }
  //   };
  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  //   const showPrev = (e) => {
  //       e.stopPropagation();
  //       let currentIndex = images.indexOf(imageToShow);
  //       if (currentIndex <= 0) {
  //         setLightBoxDisplay(false);

  //       } else {
  //         let prevImage  = images[currentIndex - 1];
  //         setImageToShow(prevImage );
  //       }
  //     };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <>
      <section id="project_detail">
        <div className="container ">
          <div className="gallery-container">
            {images.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img
                  className="gallery-image"
                  src={image.src}
                  alt={image.alt}
                />
                <div className="hover-overlay" onClick={() => showImage(index)}>
                  {/* <img className="view-icon" src={eyeIcon} alt="View" /> */}
                  <FaEye className="view-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {lightboxDisplay && currentIndex >= 0 && (
          <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev}>
              <VscTriangleLeft className="left-button" />
            </button>
            <div className="lightbox-content">
              <button className="close-button" onClick={hideLightBox}>
                <IoMdClose />
              </button>
              <img
                id="lightbox-img"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
              />
              <div className="image-index">
                {currentIndex + 1} of {images.length}
              </div>
            </div>
            <button onClick={showNext}>
              <VscTriangleRight className="right-button" />
            </button>
          </div>
        ) }
      </section>
    </>
  );
};

export default ImgGallery;

// {images.map((image, index) => (
//     <div className="gallery-item" key={index}>
//       <img
//         className="gallery-image"
//         src={image.src}
//         alt={image.alt}
//       />
//       <div
//         className="hover-overlay"
//         onClick={() => handleImageClick(image.src)}
//       >
//         {/* <img className="view-icon" src={eyeIcon} alt="View" /> */}
//         <FaEye className="view-icon" />
//       </div>
//     </div>
//   ))}
