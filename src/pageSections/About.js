import React, { useEffect, useState, useRef } from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import image2 from '../Images/VBS_8001-1.jpg'
import image03 from '../Images/VBS_8009.jpg'
import image04 from '../Images/v11.jpg'
import image05 from '../Images/v3.jpg'
import image3 from '../Images/VBS_8109.jpg'
import site1 from '../Images/site1.jpg'
import site2 from '../Images/site2.jpg'
import { CiStar } from "react-icons/ci";
import { MdArrowUpward } from "react-icons/md";
import WhatsAppButton from './whatsApp/WhatsAppButton';


const useCountUp = (start, end, duration) => {
  const [count, setCount] = useState(start);



  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
};


function About() {
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const happyClients = useCountUp(0, 2000, 1500);
  const projectsCompleted = useCountUp(0, 100, 1500);
  const locations = useCountUp(0, 10, 1500);
  const ongoingProjects = useCountUp(0, 400, 1500);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

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



  return (
    <div>
      <Navigation />
      <div className="aboutSec">
        <div className='black-bg'>
          <div className='abt-vidash'>
            <h3>About Us</h3>
            <p>We strive for excellence and aim to provide the highest of service possible</p>
          </div>
          <div className='client--passion'>
            <div className='star'>
              <span><CiStar /></span>
              <span><CiStar /></span>
              <span><CiStar /></span>
              <span><CiStar /></span>
              <span><CiStar /></span>
            </div>
            <h5>We're a team born out of a passion for client satisfaction</h5>
          </div>
        </div>

        <div className='abt-img'>
          <img src={image3} alt='' />
        </div>
        <div className='abt-imgg'>
          <img src={image3} alt='' />
        </div>

        <br /><br />

        <div className='leaders'>
          <div className='client-passion'>
            <div className='star'>
              <span><CiStar /></span>
              <span><CiStar /></span>
              <span><CiStar /></span>
              <span><CiStar /></span>
              <span><CiStar /></span>
            </div>
            <h5>We are a dedicated team driven by an unwavering passion for delivering exceptional client satisfaction.</h5>
          </div>

          <div className='abt-flex'>
            <div className='abt-text'>
              <p><span className='vidabt'>Vidash City Shelters Limited</span> stands as one of the leading real estate development companies in Abuja, renowned for its commitment to delivering high-quality residential estates that cater to the diverse needs of its clients. Over the years, we have built a solid reputation through unwavering dedication to providing exceptional value to our stakeholders, making us a trusted and preferred partner in the real estate market. Our focus on excellence, coupled with our ability to consistently meet client expectations, has positioned us as a go-to solution for both individuals and businesses seeking sustainable investments in the real estate sector.

                At Vidash City Shelters, we pride ourselves on being a reliable and innovative housing delivery destination, offering opportunities to investors and subscribers who seek not only to secure comfortable living spaces but also to grow their financial portfolios through real estate. Our commitment to delivering appreciable returns on investment has earned us the loyalty of a wide range of investors looking to achieve long-term wealth and security through property ownership. Whether it’s developing state-of-the-art residential estates or crafting bespoke real estate solutions, we place a premium on creating value for our subscribers, enabling them to reap significant benefits from their investments.</p>
            </div>
            <div className='abt-text'>
              <p>Our expertise spans across various real estate developments, including residential, commercial, and industrial projects within the Abuja region. Each of our projects undergoes a meticulous development process, starting from strategic land acquisition to careful land preparation, followed by the actual property development phase. Once the properties are developed, we facilitate seamless property sales and offer property management services to ensure the ongoing satisfaction of our clients. With our comprehensive approach to real estate development, we ensure that each phase is carried out with precision, ensuring maximum value creation at every stage. Through our projects, we are not just developing properties but also creating communities and fostering sustainable urban growth that benefits all stakeholders involved.

                </p>
            </div>
          </div>
          <div className='leadreship'>
            <h4>LEADERSHIP</h4>
          </div>
          <br />
          <div className='meet-team'><p>MEET<br /> OUR TEAM</p></div>

          <div className="leaders-grid">
            <div className="leaders-image">
              <div className="image-container">
                <img src={image2} alt="David I. Idachaba Ph.D" />
                <div className="overlay">
                  <p>David I. Idachaba Ph.D<br /> CEO</p>
                </div>
                <div className='names'>
                  <p>David I. Idachaba Ph.D <br />CEO</p>

                </div>
              </div>
            </div>
            <div className='img1'>
              <div className="leaders-image">
                <div className="image-container">
                  <img src={image03} alt="David I. Idachaba Ph.D" />
                  <div className="overlay">
                    <p>Temitayo David Idachaba<br /> Executive Director</p>
                  </div>
                  <div className="names">
                    <p>Temitayo David Idachaba<br /> Executive Director</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='img3'>
              <div className="leaders-image">
                <div className="image-container">
                  <img src={image04} alt="David I. Idachaba Ph.D" />
                  <div className="overlay">
                    <p>Owolabi Babatunde<br /> Site Manager</p>
                  </div>
                  <div className="names">
                    <p>Owolabi Babatunde<br /> Site Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='img1'>
              <div className="leaders-image">
                <div className="image-container">
                  <img src={image05} alt="David I. Idachaba Ph.D" />
                  <div className="overlay">
                    <p>Godskind Ifeanyi Victor<br /> Head Admin</p>
                  </div>
                  <div className="names">
                    <p>Godskind Ifeanyi Victor<br /> Head Admin</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <br />
          <div className="leaders-gridd">
            <div className="leaders-image">
              <div className="image-container">
                <img src={site1} alt="David I. Idachaba Ph.D" />
                <div className="overlay">
                  <p>Team at Work: Engineers on Site</p>
                </div>
                <div className="names">
                  <p>Team at Work: Engineers on Site</p>
                </div>
              </div>
            </div>
            <div className="leaders-image">
              <div className="image-container">
                <img src={site2} alt="David I. Idachaba Ph.D" />
                <div className="overlay">
                  <p>Team at Work: Engineers on Site</p>
                </div>
                <div className="names">
                  <p>Team at Work: Engineers on Site</p>
                </div>
              </div>
            </div>
            
            

          </div><br /><br />
          <div className='ff' ref={statsRef}>
            <div className='f1'>
              <h4>{startCounting ? `${happyClients}+` : '0'}</h4>
              <span>Happy Clients</span>
            </div>
            <div className='f1'>
              <h4>{startCounting ? `${projectsCompleted}+` : '0'}</h4>
              <span>Project Completed</span>
            </div>
            <div className='f1'>
              <h4>{startCounting ? `${locations}+` : '0'}</h4>
              <span>Locations</span>
            </div>
            <div className='f1'>
              <h4>{startCounting ? `${ongoingProjects}+` : '0'}</h4>
              <span>Ongoing Projects</span>
            </div>
          </div>
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
  )
}

export default About