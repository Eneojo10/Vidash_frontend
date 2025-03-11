import React from 'react';
import SideNav from '../SideNav';

function Banner() {
  return (
    <div>
      <div className='home-flex'>
        <div className='sidenav'>
          <SideNav />
        </div>

        <div className='color-grey'>
        <div className="admin-mid-color"></div>
          <div className='right-bar'>
            <div className='white-board'>
              <div className='white--board'>
                <div className='banner-forms'>
                  <div className='input'>
                    <h3>Location</h3>
                    <input type='text' />
                  </div>
                  <br />
                  <div className='input'>
                    <h3>Price</h3>
                    <input type='number' />
                  </div>
                  <br />
                  <div>
                    <input type='file' />
                  </div>
                  <br />
                  <div>
                    <button className='banner-btn'>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
