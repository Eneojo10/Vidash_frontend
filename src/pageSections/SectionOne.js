import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/global';
import { ClipLoader } from 'react-spinners'; 

function SectionOne() {
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getRecent`);
        console.log('Recent response:', response.data);

        if (response.data && Array.isArray(response.data.data)) {
          setRecent(response.data.data);
        } else {
          console.log("Unexpected data format from post:", response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); 
      }
    };
    fetchRecent();
  }, []);

  const style1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <div className='sectionOne' id='properties'>
      <div>
        <div className='dis-cover'>
          <div className='dis-btn'>
            <button className='button'>Discover</button>
          </div>
          <br />
          <div className='headeros'>
            <h1>Best Recommendation</h1>
          </div>
          <div className='quote' style={style1}>
            <p>
              Discover our exclusive collection of one-of-a-kind <br /> luxury
              properties architectural masterpiece
            </p>
          </div>
        </div>
        <div className='sectionOneGrid'>
          {loading ? (
            <div className="spinner-container">
              <ClipLoader color="#123abc" loading={loading} size={50} />
            </div>
          ) : recent.length > 0 ? (
            recent.map((recentItem, index) => (
              <a href={`/ProjectDetails/${recentItem._id}`} key={recentItem._id || index}>
                <div className='card'>
                  <img src={recentItem.imageUrl || 'default-image.jpg'} alt={recentItem.title || 'Property'} />
                  <div className='card-color'>
                    <div className='cd-text'>
                      <small>{recentItem.property_name}</small>
                      <h4>{recentItem.description}</h4>
                      <br />
                      {/* <p>{recentItem.size || 'Short description of the property'}</p> */}
                      <div className='apt-deatails'>
                        <a href={`/projectDetails/${recentItem._id}`} key={recentItem._id || index}>
                          <div className='dtails'>
                            <button className='details'>DETAILS</button>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </a>
            ))
          ) : (
            <p>No recent properties available</p>
          )}
        </div>
        <div className='lnmbtn'>
          <a href='/product' className='learnMoreBtnn'>
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
