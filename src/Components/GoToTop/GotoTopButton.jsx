import React, { useEffect, useState } from 'react'
import './GotoTopButton.css'
import { FaAngleUp } from 'react-icons/fa6';

const GotoTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="go-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
            <FaAngleUp className="go-to-top-icon" />
          {/* <FaArrowUp /> */}
        </div>
      }
    </div>
  )
}

export default GotoTopButton
