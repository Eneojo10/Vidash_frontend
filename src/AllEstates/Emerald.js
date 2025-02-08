import React, { useState, useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md'; // Import the icon
import Navigation from '../pageSections/Navigation';
import Footer from '../pageSections/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { BASE_URL } from '../utils/global';

const Card = ({ image, title, size, link, property_name, type, titles }) => (
  <a href={link}>
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-color">
        <div className="cd-text">
          <small>{property_name}</small>
          <h4>{type}</h4>
          <h4>{title}</h4>
          <h4>{titles}</h4>
          <p>{size}</p>
          <div className="apt-deatails">
            <div>
              <button className="details">DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
);

const SectionOneGrid = () => {
  const [estate, setEstate] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const { estate_id } = useParams();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
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
    if (!estate_id) {
      console.error('No estate_id provided');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getBannersByEstateId/${estate_id}`);
        const estateData = response.data?.data;
        setEstate(Array.isArray(estateData) ? estateData : []);
      } catch (err) {
        console.error('Error fetching estate:', err);
        setEstate([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [estate_id]);

  const displayedEstates = showAll ? estate : estate.slice(0, 3);

  return (
    <div>
      <Navigation />
      <div className="es-tates">
        {loading ? (
          <div className="spinner-container">
            <ClipLoader color="#36d7b7" size={50} />
          </div>
        ) : (
          estate.length > 0 ? estate.map((e) => <h5 key={e.id}></h5>) : null
        )}
      </div>
      <br />
      <div className="sectionOneGridd">
        {loading ? (
          <div className="spinner-container">
            <ClipLoader color="#36d7b7" size={50} />
          </div>
        ) : displayedEstates.length > 0 ? (
          displayedEstates.map((estateItem, index) => (
            <a href={`/ProjectDetails/${estateItem._id}`} key={estateItem._id || index}>
              <Card
                image={estateItem.imageUrl || 'default-image.jpg'}
                property_name={estateItem.property_name}
                type={estateItem.type}
                title={estateItem.description}
                titles={estateItem.descriptions}
                size={estateItem.size}
              />
              <br /><br />
            </a>
          ))
        ) : (
          <p>No estates found</p>
        )}
      </div>
      <br />

      {!showAll && estate.length > 3 && (
        <div className="estate-view-more">
          <button className="estate-view-btn" onClick={() => setShowAll(true)}>
            View All
          </button>
        </div>
      )}

      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <MdArrowUpward className="arrow-up-icon" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SectionOneGrid;
