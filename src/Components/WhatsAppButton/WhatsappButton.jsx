import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css'; 

const WhatsappButton = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/919724467687/?text=Neon%20Creative%20Concept%2011', '_blank');
      };
  return (
    <div className="whatsapp-button" onClick={openWhatsApp}>
        <div className="text-container me-0 pe-0">
            <div className="text-glow">Order on</div> 
        </div>
    <FaWhatsapp className="whatsapp-icon" />
    
  </div> 
  )
}

export default WhatsappButton
