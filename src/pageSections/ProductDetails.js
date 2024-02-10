import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Slider from './assets/Sider'

function ProductDetails() {
  return (
    <div>
      <Navigation />
      <div className='productDetailsPage'>
        <div className='pdetailsImageSec'>
          <div className='pdetailsimg'>
            <img src='duplex1.webp' alt='' />
          </div>
          <div className='featuresMap'>
            <div className='features'>
              <h4>Features</h4>
              <p>
                Jomiah Creations has 3 bedrooms well furnished,
                numquam repudiandae vel soluta ex esse qui a odit eum fugiat
                eligendi{' '}
              </p>
            </div>
            <div className='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.3757391557115!2d7.484474675017837!3d8.93748049112027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0dab406412ef%3A0x35253d4586657f18!2sJomiah%20Creations%20Limited!5e0!3m2!1sen!2sng!4v1702133239542!5m2!1sen!2sng'
                style={{border:'0',height:'100%'}}
                
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
        <div className='descriptionSec'>
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            tenetur necessitatibus vel suscipit possimus fugiat eius pariatur
            harum aliquam inventore neque, eaque, repudiandae distinctio! Eius
            tempore consectetur repellendus natus iusto reprehenderit ipsum
            quidem voluptates eligendi hic cumque incidunt ut illum asperiores
            optio fugit delectus non nam, dolorum aliquam rem consequuntur
            expedita cum vero? Autem, repellat corporis sunt, eligendi nisi ad
            repellendus accusamus alias eos minima id quo libero asperiores quas
            nam deserunt aut illum quam tempora optio modi, rerum aspernatur
            praesentium. Sed id porro neque. Magni ex porro doloremque error
            commodi magnam culpa veniam ullam, accusantium exercitationem autem
            officiis perspiciatis labore qui nulla ipsum quaerat? Fuga adipisci
            repellendus ea, minima, harum, dignissimos tenetur dolore dolorem
            quas minus accusamus velit! Optio aliquid, blanditiis reprehenderit
            laborum ab minus nihil molestiae porro quam voluptatibus sapiente
            soluta, quisquam eius possimus ex laboriosam odit aspernatur ad.
            Modi quos doloribus unde dolor minus obcaecati, alias aliquid qui
            vel
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails