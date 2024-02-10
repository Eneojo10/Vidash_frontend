import React from 'react'

function Footer() {
  return (
    <div>
      <div className='footersections'>
        <div className='footerR1'>
          <h3>VIDASH</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
            Magnam voluptatibus enim saepe.
          </p>
          <h3>News Letter</h3>
          <div className='sender'>
            <input type='text' className='searchSnd' />
            <button className='button'>Send</button>
          </div>
        </div>
        <div className='footerR2'>
          <h3>Services</h3>
          <li>Construction Management</li>
          <li>Renovation</li>
          <li>Architecture</li>
        </div>
        <div className='footerR3'>
          <h3>Contact Us</h3>
          <li>07061396988</li>
          <li>07083399007</li>
        </div>
        <div className='fotterR4'>
          <h3>Follow us</h3>
          <div className='footerIcons'></div>
        </div>
      </div>
    </div>
  );
}

export default Footer