import React from 'react'

function SectionOne() {
  const style1 = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  }
  return (
    <div className='sectionOne' id='properties'>
      <div>
        <button className='button'>Discover</button>
        <div className='headers'>
          <h1>Best Recommendation</h1>
        </div>
        <div className='quote' style={style1}>
          <p>
            Discover our exclusive collection of one-of-a-kind <br /> luxury
            properties architectural masterpiece
          </p>
          <a href='/product' className='learnMoreBtn'>
            View More
          </a>
          {/* <p className='learnMoreBtn'>Learn More</p> */}
        </div>
        <div className='sectionOneGrid'>
          <a href='/ProductDetails'>
          <div className='card'>
            <img src='flat5.jpeg' alt='' />
            <h3>Flat One</h3>
            <p>Area1, FCT</p>
            <div className='money'>
              <div className='cash'>$25,00</div>
              <div className='landMark'>300m living area</div>
            </div>
            <div className='cardbtn'>Send Inquiry</div>
          </div>
          </a>
          <a href='/ProductDetails'>
          <div className='card'>
            <img src='flat6.avif' alt='' />
            <h3>Flat Two</h3>
            <p>Apo, AMAC</p>
            <div className='money'>
              <div className='cash'>$25,00</div>
              <div className='landMark'>300m living area</div>
            </div>
            <div className='cardbtn'>Send Inquiry</div>
          </div>
          </a>
          <a href='/ProductDetails'>
          <div className='card'>
            <img src='duplex1.webp' alt='' />
            <h3>Flat Three</h3>
            <p>Garki, ABUJA</p>
            <div className='money'>
              <div className='cash'>$25,00</div>
              <div className='landMark'>300m living area</div>
            </div>
            <div className='cardbtn'>Send Inquiry</div>
          </div>
         </a>
        </div>
      </div>
    </div>
  );
}

export default SectionOne