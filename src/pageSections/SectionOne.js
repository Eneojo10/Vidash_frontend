import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/global";
import { ClipLoader } from "react-spinners";
import image1 from "../Images/aminu1.jpeg";
import image2 from "../Images/aminu5.jpeg";
import image3 from "../Images/aminu3.jpeg";
import image4 from "../Images/aminu8.jpeg";

function SectionOne() {
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  const images = [image1, image2, image3, image4]; // Array of images for slider

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getRecent`);
        console.log("Recent response:", response.data);

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

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const fullText = `
    Vidash City Shelters Welcomes Aminu De Comedian as Our New Brand Ambassador!
    We at Vidash City Shelters are thrilled to announce our exciting new partnership with none other than Aminu De Comedian, who joins us as our official brand ambassador!
    As one of Nigeria’s most beloved comedians, Aminu De Comedian has captured hearts with his humor, authenticity, and deep connection to the people. His passion for making people smile aligns perfectly with our mission—helping individuals and families secure their future through affordable land ownership in prime locations.
    
    Why Aminu De Comedian?
    
    At Vidash City Shelters, we believe in working with personalities who share our values of trust, integrity, and excellence. Aminu’s strong influence and credibility make him the perfect advocate to spread awareness about our premium, affordable land offers and help more people realize their real estate dreams.
    
    What This Means for You
    
    With Aminu De Comedian on board, we are taking our brand to the next level! This partnership means:
    ✅ More exciting engagements and giveaways
    ✅ Exclusive land deals for our customers
    ✅ Increased awareness of safe and profitable land investments
    
    Join the Movement!
    
    Stay tuned for amazing content, promotions, and events featuring Aminu De Comedian as he takes you on a journey to discovering the best land deals in Nigeria.
    
    Follow us on all social media platforms @VidashCityShelters and be part of the #OwnYourLandWithVidash movement today!
    
    Welcome to the family, Aminu De Comedian! 🎉
  `;

  const truncatedText = fullText.substring(0, 800);

  const style1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div className="sectionOne" id="properties">
      <br /><br /><br />
      <div className="ambassador">
        <div className="slider-container">
          <button className="prev-button" onClick={prevSlide}>
            ❮
          </button>
          <div className="aminu-images">
            <img src={images[currentIndex]} alt="aminu" />
          </div>
          <button className="next-button" onClick={nextSlide}>
            ❯
          </button>
        </div>
        <div className="amb-text">
          <p>{showFullText ? fullText : truncatedText}...</p>
          <button className="view-btn" onClick={() => setShowFullText(!showFullText)}>
            {showFullText ? "View Less" : "View More"}
          </button>
        </div>
      </div>

      <div>
        <div className="dis-cover">
          <div className="dis-btn">
            <button className="button">Discover</button>
          </div>
          <br />
          <div className="headeros">
            <h1>Best Recommendation</h1>
          </div>
          <div className="quote" style={style1}>
            <p>
              Discover our exclusive collection of one-of-a-kind <br /> luxury
              properties architectural masterpiece
            </p>
          </div>
        </div>
        <div className="sectionOneGrid">
          {loading ? (
            <div className="spinner-container">
              <ClipLoader color="#123abc" loading={loading} size={50} />
            </div>
          ) : recent.length > 0 ? (
            recent.map((recentItem, index) => (
              <a
                href={`/ProjectDetails/${recentItem._id}`}
                key={recentItem._id || index}
              >
                <div className="card">
                  <img
                    src={recentItem.imageUrl || "default-image.jpg"}
                    alt={recentItem.title || "Property"}
                  />
                  <div className="card-color">
                    <div className="cd-text">
                      <small>{recentItem.property_name}</small>
                      <h4>{recentItem.type}</h4>
                      <h4>{recentItem.description}</h4>
                      <p>{recentItem.size || "Short description of the property"}</p>
                      <div className="apt-deatails">
                        <a
                          href={`/projectDetails/${recentItem._id}`}
                          key={recentItem._id || index}
                        >
                          <div className="dtails">
                            <button className="details">DETAILS</button>
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
        <div className="lnmbtn">
          <a href="/product" className="learnMoreBtnn">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
