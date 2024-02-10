import React from 'react'
import Navigation from './Navigation';
import Homebanner from './Homebanner';
import SectionOne from './SectionOne';
import SectsTwo from './SectsTwo';
import SectionThree from './SectionThree';
import Footer from './Footer';

function View() {
  return (
    <div>
      <div className='desktopV'>
        <Navigation />
        <Homebanner id='home' className='desktop-home' />
        <SectionOne className='d-sec1' />
        <SectsTwo className='d-sec2' />
        <SectionThree className='d-sec3' />
        <Footer id='contact' className='d-sec4' />
      </div>
      <div className='mobileV'>
        <Navigation />
        <Homebanner id='home' className='desktop-home' />
      </div>
    </div>
  );
}

export default View