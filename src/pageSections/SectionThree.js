import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhatsAppButton from './whatsApp/WhatsAppButton';

function SectionThree() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='sectionThree'>
      <div className='clients-testimonial'>
        <button className='button'>TESTIMONIAL</button><br /><br /><br />
        <div className='testi-monial'>
          <div className='testi'>
            <h4><span className='testi-color'>Testimonials</span> From Our Clients</h4>
            <p>Check out a few things our clients have said about us over the past few years. We also appreciate working with all of you all these years.</p>
            <a href='/Contact'>
              <div>
                <button className='testi-btn'>Contact us</button>
              </div>
            </a>
          </div>

          
          <div className='testimonial-write-ups'>
            <Slider {...settings}>
              <div className='client-slider'>
                <p>Trust is paramount in real estate, and Vidash City Shelters earned ours from the very start. Their professionalism, transparency, and integrity truly set them apart. They guided us through the property purchase process with clear communication and genuine care. We're extremely satisfied with our experience and highly recommend them to anyone looking to buy.</p>
                <div className='clients--names'>
                  <h5>Mrs Aisha Ibrahim</h5>
                  <p>Business Woman</p>
                </div>
              </div>
              <div className='client-slider'>
                <p>As an investor, securing the right property is essential. Vidash City Shelters has been my trusted partner for years. Their extensive market expertise and insightful guidance have been instrumental in building my successful real estate portfolio. I strongly recommend them to any dedicated investor.</p>
                <div className='clients--names'>
                  <h5>Madam Jennifer Okah</h5>
                  <p>Business Woman</p>
                </div>
              </div>

            </Slider>
            <WhatsAppButton/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SectionThree;
