import React from 'react'

function SectsTwo() {
  return (
    <div className='SectsTwo' id='services'>
      <div>
        <button className='button'>SERVICES</button>
        <div className='headers'>
          <h1>What we do</h1>
        </div>
        <div className='gridSection'>
          <div className='cards'>
            <div className='icon'></div>
            <h3>CONSTRUCTION MANAGEMENT</h3>
            <p>
              We give the best professional <br /> construction management
              service on industrial, resident, infrastructure development,
            </p>
          </div>
          <div className='cards'>
            <div className='icon'></div>
            <h3>RENOVATION</h3>
            <p>
              Professional renocvation that make your infrasturcture look good
              as new
            </p>
          </div>
          <div className='cards'>
            <div className='icon'></div>
            <h3>ARCHITECTURE</h3>
            <p>We offers a world class architechureal service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectsTwo