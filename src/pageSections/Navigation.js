import React, {useState} from 'react'
import { FaBeer } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

function Navigation() {
  const [active, setActive] = useState('navItems-M');
  const toggle = (e) =>{
    active === 'navItems-M' ? setActive('hide') : setActive('navItems-M');
  }
  return (
    <div>
      <div className='desktopNav'>
        <div className='navLogo'>
          <a href='/'>
            <img src='vidashshelterLogo.png' alt='' className='logo' />
          </a>
        </div>
        <div className='navItems'>
          <a href='/'>Home</a>
          <a href='/product'>Properties</a>
          <a href='/About'>About</a>
          {/* <a href='#services'>Service</a> */}
          <a href='/Contact'>Contact</a>
        </div>
      </div>
      <div className='desktopNavMobile'>
        <div className='navLogo-m'>
          <img src='vidashshelterLogo.png' alt='' className='logo' />
          <div className="menuicon">
          <AiOutlineMenu
            onClick={toggle}
            size={'1.5rem'}
            color=''
          />

          </div>
        </div>
        <div className={active}>
          <li>
            <a href='#home' className='nav-M-item'>
              Home
            </a>
          </li>
          <li>
            <a href='#properties' className='nav-M-item'>
              Properties
            </a>
          </li>
          <li>
            <a href='#services' className='nav-M-item'>
              Service
            </a>
          </li>
          <li>
            <a href='#' className='nav-M-item'>
              About
            </a>
          </li>
          <li>
            <a href='#contact' className='nav-M-item'>
              Contact
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navigation