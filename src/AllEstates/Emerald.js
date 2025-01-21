import React, { useState, useEffect } from 'react';
import Navigation from '../pageSections/Navigation';
import Footer from '../pageSections/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/global';

const Card = ({ image, title, size, link }) => (
  <a href={link}>
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-color">
        <div className="cd-text">
          <h4>{title}</h4>
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
  const { estate_id, id } = useParams();

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
      }
    };

    fetchData();
  }, [estate_id]);

  return (
    <div>
      <Navigation />
      <div className="es-tates">
        {estate.length > 0 ? (
          estate.map((e) => <h5 key={e.id || e.property_name}>{e.property_name}</h5>)
        ) : (
          <p>No estates available</p>
        )}
      </div>
      <br />
      <div className="sectionOneGridd">
        {estate.length > 0 ? (
          
            estate.map((estateItem, index) => (
              <a href={`/ProjectDetails/${estateItem._id}`} key={estateItem._id || index}>
                <Card
                  key={estateItem.id || estateItem.description}
                  image={estateItem.imageUrl || 'default-image.jpg'}
                  title={estateItem.description}
                  size={estateItem.size}
                  
                />
              </a>
            ))
          
        ) : (
          <></>
        )}

      </div>
      <br />
      <a href="/moreestate">
        <div className="estate-view-more">
          <button className="estate-view-btn">View All</button>
        </div>
      </a>
      <Footer />
    </div>
  );
};

export default SectionOneGrid;
