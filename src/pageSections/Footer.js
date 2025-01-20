import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiFacebookFill } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer-color'>
      <div className='footerdisplay'>
        <div className='footer1'>
          <h5>About Vidash City</h5><br />
          <p>Vidash City Shelters is a renowned, value-focused real estate development company, committed to a threefold approach that emphasizes exceptional service, customer satisfaction, and quality delivery. </p>
        </div>
        <div className='footer1'>
          <h5>Contact Us</h5><br />
          <div className='location-'>
            <div>
              <CiLocationOn />
            </div>
            <div>
              <p>DX 15, Barumark Estate, Wuye, Abuja </p>
            </div>
          </div>
          <div className='fft d-flex'>
            <div className='f-icons'>
              <FaPhoneAlt />
            </div>
            <div>
              <h5>07061396988</h5>
            </div>
          </div>
          {/* <div className='fft d-flex'>
            <div className='f-icons'>
              <FaPhoneAlt />
            </div>
            <div>
              <h5>09085274813</h5>
            </div>
          </div> */}
          <div className='f--mail d-flex'>
            <div className='f-icons'>
              <MdOutlineAttachEmail />
            </div>
            <div className='fmail'>
              <h5>vidashcityshelterslimited@gmail.com</h5>
            </div>
          </div>
        </div>


      </div>

      <div className='fi-iconsflex'>
        <div className='ficonsflex'>
          <div>
            <p>
              &copy; Vidash. All rights reserved.
            </p>
          </div>
          <div className='footer--icons'>
            <div>
              <RiFacebookFill />
            </div>
            <div>
              <GrTwitter />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
            <div>
              <RiInstagramFill />
            </div>
            <div>
              <FaYoutube />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer