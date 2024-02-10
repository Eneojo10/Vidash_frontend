import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

function MobileFooter() {
  return (
    <div className='mobilefooter_container'>
      <h5>VIDASH</h5>
      <p>City Shelters</p>

      <div className='phone'></div>
        <div className='phonelist'>
          <h5>PHONE</h5>
          <li>0815 515 3780</li>
          <li>0903 353 2602</li>
        </div>
        <div className='email'>
          <h5>EMAIL</h5>
          <li>contact@vidashcityshelters.com</li>
        </div>
        <div className='Address'>
          <h5>Address</h5>
          <p>267 Area11 Road4, Abuja.</p>
        </div>
        <div className='icons'>
          <a href='#' className='facebook'>
            <FaFacebookF />
          </a>
          <a href='#' className='whatsapp'>
            <FaWhatsapp />
          </a>
          <a href='#' className='twitter'>
            <FaXTwitter />
          </a>
          <a href='#' className='instagram'>
            <FaInstagram />
          </a>

      </div>
    </div>
  );
}

export default MobileFooter