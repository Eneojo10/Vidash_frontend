import React from 'react';
import image from '../../Images/whatsApp.png'

const WhatsAppButton = () => {
  const adminWhatsAppNumber = "09036159207"; 
  const predefinedMessage = "Hello, I would like to know more about your services.";
  const whatsappLink = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(predefinedMessage)}`;

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '80px' }}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <img
          src={image}
          alt="WhatsApp"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
