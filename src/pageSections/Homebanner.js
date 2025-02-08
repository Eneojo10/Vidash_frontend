import React, { useState, useEffect } from 'react';
// import Assets from './assets/Assets';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Sider from './assets/Sider';
import AllProperties from './AllProperties';
// import { type } from '@testing-library/user-event/dist/type';

import { data } from '../data.js'
import { TbCurrencyNaira } from 'react-icons/tb';
import MobileServices from './mobilepages/MobileServices.js';

import { MdArrowUpward } from "react-icons/md";





function Homebanner() {
  const [active, setActive] = useState('active');
  const [deActive, setDeActive] = useState('active');
  const [searchActive, setSearchActive] = useState('active');
  const [notify, setNotify] = useState('found');
  const [showScroll, setShowScroll] = useState(false);
  const [animate, setAnimate] = useState(false);


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


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  function hide(e) {
    e.preventDefault();
    if (active === 'active' || deActive === true) {
      setActive('buyRentInfo');
      setDeActive('active');
    } else {
      setActive('active');
      setDeActive('active');
    }
  }
  function hide1(e) {
    e.preventDefault();
    if (deActive === 'active' || active === true) {
      setDeActive('buyRentInfo');
      setActive('active');
    } else {
      setDeActive('active');
      setActive('active');
    }
  }

  function closeBtn(e) {
    e.preventDefault();
    if (searchActive === 'allProperties') {
      setSearchActive('active');
      setSelcted('select');
      setSelected1('select');
      setSelected2('select');
    }
  }
  // data from the select tage to form the search key
  const [formData, setFormData] = useState({
    Location: '',
    type: '',
    piceRange: '',
  });
  const handleSelectChange = (event) => {
    const { name, Value } = event.target;

    // updating the corresponding key in formData state
    setFormData((prevData) => ({ ...prevData, [name]: Value }));
    alert(formData);
  };
  //  Data usage
  const [selected, setSelcted] = useState("select");

  console.log(selected)
  const [select1, setSelected1] = useState("select");
  const [select2, setSelected2] = useState("select");
  const handleSelected = (e) => {
    setSelcted(e);
  };
  const handleSelected1 = (e) => {
    setSelected1(e);
  };
  const handleSelected2 = (e) => {
    setSelected2(e);
  };
  const [location, setLocation] = useState([
    'Area10',
    'Wuse',
    'Apo',
    'Area1',
    'Gwarimpa',
    // 'area1',
    'Nyaya',
    'Kuje',
  ]);
  const [property_type, setproperty_type] = useState([
    'House',
    'Duplex',
    'Apartment',
    'Flat',
  ]);
  const [houses, setHoues] = useState([
    // area10:[],
  ])

  var PropertiesNeeded = [
    {
      id: '1',
      name: '',
      type: 'duplex',
      location: 'apo',
      img: '/city1.jpeg',
      price: '$200',
    },
    {
      id: '2',
      name: '',
      type: 'flat',
      location: 'apo',
      img: '/city1.jpeg',
      price: '$100',
    },
    {
      id: '3',
      name: '',
      type: 'bungalow',
      location: 'area1',
      img: '/city1.jpeg',
      price: '$400',
    },
    {
      id: '4',
      name: '',
      type: 'duplex',
      location: 'area1',
      img: '/city1.jpeg',
      price: '$350',
    },
    {
      id: '5',
      name: '',
      type: 'bongalo',
      location: 'apo',
      img: '/city1.jpeg',
      price: '$120',
    },
  ];
  // Searcher 
  const arr = { property_type: select1.toString(), location: selected.toString() };
  const [search, setSearch] = useState({
    property_type: select1.toString(),
    location: selected.toString(),
  });
  const [mydata, setMydata] = useState([])
  var filtered_data = data.filter(
    (item) =>
      item.Location == search.location &&
      item.property_type == search.property_type
  );

  useEffect(() => {
    setSearch(arr);

  }, []);



  function searcher() {


    console.log(filtered_data)
    console.log(search)
    let result = PropertiesNeeded.filter(
      (item) =>
        item.location === selected &&
        item.type === select1 && item.price === select2
    );
    // setSearch(arr);
    // Not Found
    if (result.length !== 0) {
      console.log('Found');
      setNotify('found');
      // setMydata(filtered_data);
    } else {
      if (result.length <= 0) {
        console.log(filtered_data);
        setNotify('notfound');
      }

    }



    if (searchActive === 'active') {
      setSearchActive('allProperties');
    } else {
      // setSearchActive('active');
    }


  }
  let FinalResult = [];
  const [searchinput, setSearchinput] = useState("")
  function mbSeaacher() {

    if (searchinput !== "") {
      let result = searchinput.split(" ");
      let valuesgotten = result.map(term => term.trim().toLocaleLowerCase())
      const filteredData = PropertiesNeeded.filter((item) => {
        let locationGotten = item.location.toLowerCase();
        return valuesgotten.some(term => locationGotten.includes(term));

      });

      FinalResult = filteredData;
      if (FinalResult.length !== 0) {
        if (searchActive === 'active') {
          setSearchActive('allProperties');
        } else {
          // setSearchActive('active');
        }
      }
      console.log(FinalResult)
    } else {
      return false
    }











  }
  useEffect(() => {
    // searcher();
  }, []);

  // event handler for submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Form Data:', formData);


    // testing emma solution





  };



  return (
    <div className='homebanner'>
      <div className='homebannerM'>
        <div className='homemobileBackground'>
          <div class="content">
            <h4>Find Your Dream Home</h4>
            <p>Discover properties that suit your lifestyle.</p>

          </div>
          
        </div>

        


        
      </div>
     

      <div className='desktopDetails'>
        <div className='slider-container-main'>
          <div className='side-info-1'>
            <button className='button'>Real Estate</button>

            <div className='headers'>
              <h3>
                Investing in real estate <br />is a smart decision making. <br /> However investing with the right <br /> company is what set's you apart.
              </h3>
            </div>
          </div>

          <div className='homebannerImage '>
            <Sider
              firstImage='TD 1.jpg'
              secImage='TDP 1.jpg'
              thirdImage='V4.jpg'
              forthImage='DD 1.jpg'
              fifthImage='DD 2.jpg'
              sixthImage='DDD.jpg'
            />

          </div>

          
        </div>
        

        <div className={searchActive}>
          <div>
            <div className='closebtn' onClick={(e) => closeBtn(e)}>
              X
            </div>
            <div className='locator'>
              <p>
                You searched: Location: {arr.location}, Type:{' '}
                {arr.property_type}, Price: ,
              </p>
            </div>
            <p className={notify}>
              Sorry we currently don't have any property matching your request
            </p>
            <div className='gridHolder'>
              {PropertiesNeeded
                .filter((item) => {
                  if (item.length !== 0) {
                    return (
                      item.location === selected &&
                      item.type === select1 && item.price === select2
                    );
                  }
                })
                .map((item) => (
                  <div className='gridCrads'>
                    <img src='duplex1.jpeg' alt='' className='gridImg' />
                    <h5 className='propertyName'>{item.property_type}</h5>
                    <span className='propertyDescp'>
                      {' '}
                      {item.bedrooms} bedroom {item.property_type}
                    </span>
                    <span className='propertyDescp'> {item.Location}</span>
                    <div className='priceTag'>
                      <div className='cashP'>
                        <TbCurrencyNaira />
                        {item.price}
                      </div>
                      <div className='cashD'>
                        <button className='button'>Promo</button>
                      </div>
                    </div>
                    <div className='cardbtn'>Buy Now</div>
                  </div>
                ))}


            </div>
          </div>
        </div>

        {/* {showScroll && (
          <div className='scroll-to-top' onClick={scrollToTop}>
            <MdArrowUpward className='arrow-up-icon' />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Homebanner