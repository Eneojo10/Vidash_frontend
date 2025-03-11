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
          <div className='right-bar'>
            <div className='white-board'>
              <div className='white--board'>
                <div className='banner-form'>
                  <div className='textarea'>
                    <h4>About Vidash</h4>
                    <textarea type='text' />
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
