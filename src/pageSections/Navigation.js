import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../utils/global';
import axios from 'axios';
import image from '../Images/vidashshelterLogo.png'

function Navigation() {
  const [active, setActive] = useState('navItems-M');
  const [isOpen, setIsOpen] = useState(false);
  const [navigation, setNavigation] = useState([]);
  const [estate, setEstate] = useState([]);

  useEffect(() => {
    const fetchNav = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getAllNavs`);
        console.log("Navigation response:", response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setNavigation(response.data.data);
        } else {
          console.log("Unexpected data format for navigation:", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNav();
  }, []);

  useEffect(() => {
    const fetchEstates = async () => {
      try {
        const cachedEstates = localStorage.getItem('estates');
        if (cachedEstates) {
          setEstate(JSON.parse(cachedEstates));
          console.log("Loaded estates from localStorage:", JSON.parse(cachedEstates));
        } else {
          const response = await axios.get(`${BASE_URL}/getAllEstates`);
          console.log('Estates response:', response.data);

          if (response.data && Array.isArray(response.data.data)) {
            setEstate(response.data.data);
            localStorage.setItem('estates', JSON.stringify(response.data.data)); // Save to localStorage
          } else {
            console.warn("Unexpected data format:", response.data);
          }
        }
      } catch (error) {
        console.error("Error fetching estates:", error.message);
      }
    };

    fetchEstates();
  }, []);



  const toggleNav = () => {
    active === 'navItems-M' ? setActive('hide') : setActive('navItems-M');
  };

  const toggleEstatesDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="desktopNav">
        <div className="navLogo">
          <a href="/">
            <img src={image} alt="" className="logo" />
          </a>
        </div>
        <div className="navItems">

          <a href='/' className='navlink'>Home</a>

          <ul>
            <li>
              <a className="navlink_es">Our Estates</a>
              <ul>
                {estate.length > 0 ? (
                  estate.map((estateItem, index) => (
                    <Link key={index} to={`/estate/${estateItem.estates.toLowerCase().replace(" ", "")}/${estateItem._id}`}>
                      <li><a>{estateItem.estates}</a></li>
                    </Link>

                  ))
                ) : (
                  <li><a>No estates available</a></li>
                )}
              </ul>
            </li>
          </ul>
          {Array.isArray(navigation) && navigation.map((navItem, index) => {
            return (
              <a href={`/projects/${navItem._id}`} key={navItem._id || index} className="navlink">
                {navItem.navigations}
              </a>
            );
          })}
          {/* <a href="/projects" className="navlink">Projects</a> */}
          <a href="/About" className="navlink">About Us</a>
          <a href="/Contact" className="navlink">Contact</a>
        </div>
      </div>


      <div className="desktopNavMobile">
        <div className="navLogo-m">
          <img src={image} alt="" className="logo" />
          <div className="menuicon">
            <AiOutlineMenu onClick={toggleNav} size={'1.5rem'} />
          </div>
        </div>


        <div className={active}>
          <li>
            <a href="/" className="nav-M-item">Home</a>
          </li>
          <li>

            <a onClick={toggleEstatesDropdown} className="navlink_es">
              Our Estates
            </a>
            {isOpen && (
              <ul className='estate-dropdown'>
                <h5>Feature Estate</h5>
                {estate.length > 0 ? (
                  estate.map((estateItem, index) => (
                    <Link key={index} to={`/${estateItem.estates.toLowerCase().replace(" ", "")}`}>
                      <li><a>{estateItem.estates}</a></li>
                    </Link>
                  ))
                ) : (
                  <li><a>No estates available</a></li>
                )}
              </ul>
            )}
          </li>
          {Array.isArray(navigation) && navigation.map((navItem, index) => {
            return (
              <a href={`/projects/${navItem._id}`} key={navItem._id || index} className="navlink">
                {navItem.navigations}
              </a>
            );
          })}
          <li>
            <a href="/About" className="nav-M-item">About Us</a>
          </li>
          <li>
            <a href="/Contact" className="nav-M-item">Contact</a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
