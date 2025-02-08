import React, { useState, useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md'; // Ensure you install react-icons
import Navigation from './Navigation';
import Homebanner from './Homebanner';
import SectionOne from './SectionOne';
import SectsTwo from './SectsTwo';
import SectionThree from './SectionThree';
import Footer from './Footer';

function View() {
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

  return (
    <>
      <div className="desktopV">
        <Navigation />
        <Homebanner id="home" className="desktop-home" />
        <SectionOne className="d-sec1" />
        <SectsTwo className="d-sec2" />
        <SectionThree className="d-sec3" />
        <Footer id="contact" className="d-sec4" />
      </div>

      {/* <div className="mobileV">
        <Navigation />
        <Homebanner id="home" className="desktop-home" />
      </div> */}

      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <MdArrowUpward className="arrow-up-icon" />
        </div>
      )}
    </>
  );
}

export default View;
