import React from 'react'

import { RiDoubleQuotesL } from 'react-icons/ri';

function SectionThree() {
  return (
    <div className='sectionThree'>
      <div>
        <button className='button'>Cutomers Review</button>
        <div className='headers'>
          <h1>Giving you peace of mind</h1>
        </div>
        <div className='gridSection'>
          <div className='cardss'>
            <div className='icon'>
              <RiDoubleQuotesL className='icons' />
            </div>
            {/* <h3>Lorem ipsum dolor sit amet.</h3> */}
            <div className='userInfo'>
              {/* <div className='userImg'></div> */}
              <div className='userDetails'>
                <h5>ENGR S. MORGAN</h5>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>
            </div>
            <p>Its nothing but the best. Highly recommended.</p>
          </div>
          <div className='cardss'>
            <div className='icon'>
              <RiDoubleQuotesL className='icons' />
            </div>
            {/* <h3>Lorem ipsum dolor sit amet.</h3> */}
            <div className='userInfo'>
              {/* <div className='userImg'></div> */}
              <div className='userDetails'>
                <h5>MR OLUWAFEMI SOLOMON</h5>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>
            </div>
            <p>A professional consultation at it best.</p>
          </div>
          <div className='cardss'>
            <div className='icon'>
              <RiDoubleQuotesL className='icons' />
            </div>
            {/* <h3>Lorem ipsum dolor sit amet.</h3> */}
            <div className='userInfo'>
              {/* <div className='userImg'></div> */}
              <div className='userDetails'>
                <h5>MR.TUNDE OLAGOKE</h5>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>
            </div>
            <p>No 1, estate service provider, beyoud the reach</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree