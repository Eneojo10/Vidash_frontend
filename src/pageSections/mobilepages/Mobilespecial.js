import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';


function Mobilespecial() {
  return (
    <div>
      <div className='just4uHolder'>
        <div className='justForYou'>
          <div className='caption'>
            <div className='title'>
              <h3>Just For You</h3>
            </div>
            <div className='seeAll'>
              <h5>See All</h5>
            </div>
          </div>
          <div className='just4uContainer'>
            <div className='forU'>
              <div className='cardM'>
                <img src='/duplex1.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
              <div className='cardM'>
                <img src='/city1.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
              <div className='cardM'>
                <img src='/city2.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilespecial
