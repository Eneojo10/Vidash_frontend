import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { MdArrowUpward } from "react-icons/md";
import video1 from '../Images/frame.mp4';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/global';

function ProductDetails() {
  const [showScroll, setShowScroll] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setAnimate(true);

    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getBannerById/${id}`);
        const productData = response.data?.data;

        // Ensure features is an array
        if (productData && typeof productData.features === 'string') {
          productData.features = productData.features.split('\n');
        }

        setProduct(productData || {});
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details.");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);


  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <Navigation />
      <div className="productDetailsPage">
        <div className="ph-text">
          <h3>{product.description || "Product Details..."}</h3>
          <p>{product.size || "Product Details"}</p>
        </div>

        <div className="product_image">
          <div className="prductimg">
            <img src={product.imageUrl || 'default-image.jpg'} alt={product.name || 'Product'} />
          </div>
          <div className="ph-text-mobile">
            <h3>{product.description || "Product Details..."}</h3>
            <p>{product.size || "Product Details"}</p>
          </div>
        </div>

        <br /><br /><br /><br />

        <div className="colors">
          <div className="color1">
            <div className="features">
              <div className='ftures'>
              <h2>Features</h2>
              
              </div>
              <div>
                {product.features && product.features.length > 0 ? (
                  product.features.map((feature, index) => <p key={index}>{feature}</p>)
                ) : (
                  <p>No features listed.</p>
                )}
              </div>
            </div>

          </div>
        </div>

        <br /><br /><br /><br/><br/>

        <div className="productVideo">
          <video width="100%" height="250" controls>
            <source src={product.videoUrl || video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <MdArrowUpward className="arrow-up-icon" />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProductDetails;
