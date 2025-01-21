import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { MdKeyboardArrowRight, MdArrowUpward } from "react-icons/md";
import image from '../Images/VDD/VH.jpg';
import WhatsAppButton from './whatsApp/WhatsAppButton';
import axios from 'axios';
import { BASE_URL } from '../utils/global';
import { useParams } from 'react-router-dom';

function Product() {
  const [animate, setAnimate] = useState(false);
  // const [visibleImages, setVisibleImages] = useState(3); 
  const [showScroll, setShowScroll] = useState(false); 
  const [product, setProduct] = useState([]);
  const { nav_id } = useParams();

  // const images = [
  //   { id: 1, src: image, title: 'Beryl' },
  //   { id: 2, src: image, title: 'Beryl' },
  //   { id: 3, src: image, title: 'Beryl' },
  //   { id: 4, src: image, title: 'Beryl' },
  //   { id: 5, src: image, title: 'Beryl' },
  // ];

  useEffect(() => {
    setAnimate(true);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const loadMore = () => {
  //   setVisibleImages((prev) => prev + 3); 
  // };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getBannersByNavId/${nav_id}`);
        const navData = response.data?.data;
        console.log(response);
        
        setProduct(Array.isArray(navData) ? navData : []);
      } catch(err) {
        console.error('Error fetching nav:', err);
        setProduct([]);
      }
    };

    fetchProduct();
  }, [nav_id]);

  useEffect(() => {
    if (nav_id) {
      localStorage.setItem('nav_id', nav_id);
    }
  }, [nav_id]);

  return (
    <div>
      <Navigation />
      <div className='product'>
        <div className='pro-margin'>
          <div className='project-flex'>
            <a href='/' className='line'>
              <div>
                <h4>Home</h4>
              </div>
            </a>
            <div className='project-icons'>
              <MdKeyboardArrowRight />
            </div>
            <div>
              <h5>Projects</h5>
            </div>
          </div>
          <h2 className='headersm'>Projects</h2>

          <div className='pjts'>
            <h5>Projects</h5>
          </div>
          <br />
          <div className={`allprojects ${animate ? 'animate-circle' : ''}`}>
            <h2>
              All <span className="pcolor">Projects</span>
            </h2>
          </div>

          <div className='productG'>
            {product.map((imgItem, index) => (
              <a href={`/ProjectDetails/${imgItem._id}`} key={imgItem._id  || index} className='pdetails' >
                <div className='card'>
                  <img src={imgItem.imageUrl} alt={imgItem.title} />
                  
                  <div className='card-color'>
                    <div className='cd-text'>
                      <h4>{imgItem.description}</h4>
                      <p>{imgItem.size}</p>
                      <div className='apt-deatails'>
                        
                        <div>
                          <button className='details'>DETAILS</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Load More Button */}
          {/* {visibleImages < images.length && (
            <div className='load-more'>
              <button onClick={loadMore} className='load-more-btn'>
                Load More
              </button>
            </div>
          )} */}
          <WhatsAppButton/>
          
          {showScroll && (
            <div className='scroll-to-top' onClick={scrollToTop}>
              <MdArrowUpward className='arrow-up-icon' />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;