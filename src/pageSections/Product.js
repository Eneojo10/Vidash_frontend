import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer';

function Product() {
  return (
    <div>
      <Navigation />
      <div className='product'>
        <h2 className='headers'>ALL FLATS AVAILABLE</h2>
        <div className="prodCategory">
          <p>Display by Category: </p> 
          <div className="pcatItem">
            <li>Flat</li>
            <li>Duplex</li>
            <li>Land</li>
          </div>
        </div>
        <div className='productG'>
          <a href='/ProductDetails' className='pdetails'>
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
          <a href='/ProductDetails' className='pdetails'>
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
          <a href='/ProductDetails' className='pdetails'>
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
      <Footer />
    </div>
  );
}

export default Product