import React from 'react'

function MobileServices() {
  return (
    <div>
      <div className='m_service_section_container'>
        <h3 className='m_service_header'>What We Offer</h3>
        <p>
          We provide distinctive residential choices for both rent and purchases.
        </p>
        <div className="m_service_sec">
          <div className="service_text">
            <h4>Renovations</h4>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="service_img">
            <img src="flat5.jpeg" alt="" />
          </div>
        </div>
        <div className="m_service_sec">
          <div className="service_img">
            <img src="flat3.png" alt="" />
          </div>
          <div className="service_text">
            <h4>Land Sales</h4>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="m_service_sec">
          <div className="service_text">
            <h4>Architecture</h4>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="service_img">
            <img src="flat7.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileServices