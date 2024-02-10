import React, {useState, useEffect} from 'react';
// import Assets from './assets/Assets';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Sider from './assets/Sider';
import AllProperties from './AllProperties';
// import { type } from '@testing-library/user-event/dist/type';
import { FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Cards from './assets/Cards';
import {data} from '../data.js'
import { TbCurrencyNaira } from 'react-icons/tb';
import MobileServices from './mobilepages/MobileServices.js';
import MobileFooter from './mobilepages/MobileFooter.js';
import Mobilespecial from './mobilepages/Mobilespecial.js';





function Homebanner() {
  const [active, setActive] = useState('active');
  const [deActive, setDeActive] = useState('active');
  const [searchActive, setSearchActive] = useState('active');
  const [notify, setNotify] = useState('found');
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
  const [selected, setSelcted] = useState([]);
  const [select1, setSelected1] = useState([]);
  const [select2, setSelected2] = useState([]);
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
  // Searcher 
   const arr = { property_type: select1.toString(), location: selected.toString()};
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

    function searcher(e) {
      // e.preventDefault();
      console.log(filtered_data)
      console.log(search)
      filtered_data = data.filter(
        (item) =>
          item.Location == search.location &&
          item.property_type == search.property_type
      );
      // setSearch(arr);
      // Not Found
        if (filtered_data.length !== 0 && filtered_data.length >= 0 ){
          console.log('Found');
          setNotify('found');
          // setMydata(filtered_data);
        } else {
          if (filtered_data.length === 0 && filtered_data.length !== true) {
            console.log(filtered_data);
            setNotify('notfound');
          }          
          
        }

        setMydata(filtered_data);

        if (searchActive === 'active') {
          setSearchActive('allProperties');
        } else {
          // setSearchActive('active');
        }
        
        // if (filtered_data.length === 0) {
        //   setNotify('notfound');
        //   console.log('notfound')
        // }
    }
        useEffect(() => {
          // searcher();
        }, []);

  // event handler for submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Form Data:', formData);


    // testing emma solution

    var PropertiesNeeded = [
      {
        id: '1',
        name: '',
        type: 'duplex',
        location: 'apo',
        img: '',
        price: '',
      },
      {
        id: '2',
        name: '',
        type: 'flat',
        location: 'apo',
        img: '',
        price: '',
      },
      {
        id: '3',
        name: '',
        type: 'bungalow',
        location: 'area1',
        img: '',
        price: '',
      },
      {
        id: '4',
        name: '',
        type: 'duplex',
        location: 'area1',
        img: '',
        price: '',
      },
      {
        id: '5',
        name: '',
        type: 'bongalo',
        location: 'apo',
        img: '',
        price: '',
      },
    ];

    // const datafiltered = PropertiesNeeded.filter((items)=>{
    //   if (
    //     items.location === search.property_type &&
    //     items.type === search.property_type
    //   ) {
    //     return items;
    //   }else{
    //     console.log("not found in vidash")
    //   }
    // })

    //   setMydata(datafiltered);

  };

  

  return (
    <div className='homebanner'>
      <div className='homebannerM'>
        <div className='homemobileBannerBackground'>
          <h4>Find, Buy & Rent with us!</h4>
          <p>Explore our range of beautiful properties suitable for you.</p>

          <button className='buyMobile_btn'>
            <a href='#'>Buy</a>
          </button>
          <button className='rentMobile_btn'>
            <a href='#'>Rent</a>
          </button>
        </div>
        {/* <div className='mobileSearchbar'>
          <input type='text' className='m-srchbar' placeholder='Search' />
          <FaSearch />
        </div> */}

        <div className='categoryHolder'>
          <h3>Properties Categories</h3>
          <div className='categoryButton'>
            <button className='mobile-button'>Houses</button>
            <button className='mobile-button'>Land</button>
            <button className='mobile-button'>Duplex</button>
            <button className='mobile-button'>Flat</button>
          </div>
        </div>

        <div className='popularSec'>
          <div className='caption'>
            <div className='title'>
              <h3>Most Popular</h3>
            </div>
            <div className='seeAll'>
              <h5>See All</h5>
            </div>
          </div>
          <div className='popularDisplay'>
            <div className='mobileGrid'>
              <div className='cardM'>
                <img src='/duplex1.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
              <div className='cardM'>
                <img src='/city1.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
              <div className='cardM'>
                <img src='/city2.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileServices />
        <Mobilespecial/>


        {/* <Sider
          firstImage='duplex2.avif'
          secImage='flat6.avif'
          thirdImage='flat7.jpeg'
        /> */}
      </div>
      <MobileFooter className='mobileFooterTag' />

      <div className='desktopDetails'>
        <div className='homebannerImage'>
          <Sider
            firstImage='duplex2.avif'
            secImage='flat6.avif'
            thirdImage='flat7.jpeg'
          />
          {/* <img src='duplex4.png' alt='' className='homebannerImage' /> */}
        </div>
        <div>
          <button className='button'>Real Estate</button>

          <div className='headers'>
            <h1>
              Let's hunt for your <br /> dream residence
            </h1>
          </div>
          <p className='quote'>
            Explore our range of beautiful properties with addition of <br />{' '}
            separate accomodation suitable for you.
          </p>
          <div className='buyRent'>
            <button
              onClick={(e) => hide(e)}
              style={{ borderRight: '1px solid black' }}
            >
              Buy
            </button>
            <button onClick={(e) => hide1(e)}>Rent</button>
          </div>
          <form action='' on onSubmit={handleSubmit}>
            <div className={active}>
              <div className='location'>
                <p>Location</p>

                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='white'
                  onSelect={handleSelected}
                >
                  {location.map((item) => (
                    <>
                      <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                      <Dropdown.Divider />
                    </>
                  ))}
                  {/* <Dropdown.Item eventKey={'Duplex'}>
                    Dunamis Area3
                  </Dropdown.Item>
                  <Dropdown.Divider /> */}
                </DropdownButton>
              </div>
              <div className='type'>
                <p>Type</p>
                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='white'
                  onSelect={handleSelected1}
                >
                  {property_type.map((item) => (
                    <>
                      <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                      <Dropdown.Divider />
                    </>
                  ))}
                  {/* <Dropdown.Item eventKey={'Flat'}>Flat </Dropdown.Item>
                  <Dropdown.Divider /> */}
                </DropdownButton>
              </div>
              <div className='price'>
                <p>Price Range</p>

                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='light'
                  onSelect={handleSelected2}
                >
                  <Dropdown.Item eventKey={'$100'}>$$350</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey={'$200'}>$500</Dropdown.Item>
                </DropdownButton>
              </div>
              <button
                className='buyRentSearchBtn'
                type='submit'
                onClick={searcher}
              >
                Search
              </button>
            </div>
            <div className={deActive}>
              <div className='location'>
                <p>Location</p>
                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='white'
                >
                  <Dropdown.Item href='#/action-1'>Dunamis Area1</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-2'>Kuje, Abuja </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-3'>Lugbe, Abuja </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className='type'>
                <p>Type</p>
                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='light'
                >
                  <Dropdown.Item href='#/action-1'>Duplex</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-2'>Flat</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className='price'>
                <p>Price Range</p>

                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='light'
                >
                  <Dropdown.Item href='#/action-1'>$100 - $200</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-2'>$350 - $500</Dropdown.Item>
                </DropdownButton>
              </div>
              <button className='buyRentSearchBtn' onClick={(e) => searcher(e)}>
                Search
              </button>
            </div>
          </form>
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
              {mydata
                .filter((item) => {
                  if (item.length !== 0) {
                    return (
                      item.Location == search.location &&
                      item.property_type == search.property_type
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

              {/* <div className='gridCrads'>
                <img src='duplex1.jpeg' alt='' className='gridImg' />
                <h5>A Duplex</h5>
                <span> An eight bedroom duplex</span>
                <div className='priceTag'>
                  <div className='cashP'>$120.00</div>
                  <div className='cashD'>
                    <button className='button'>Promo</button>
                  </div>
                </div>
                <div className='cardbtn'>Buy Now</div>
              </div>
              <div className='gridCrads'>
                <img src='duplex1.jpeg' alt='' className='gridImg' />
                <h5>A Duplex</h5>
                <span> An eight bedroom duplex</span>
                <div className='priceTag'>
                  <div className='cashP'>$120.00</div>
                  <div className='cashD'>
                    <button className='button'>Promo</button>
                  </div>
                </div>
                <div className='cardbtn'>Buy Now</div>
              </div>
              <div className='gridCrads'>
                <img src='duplex1.jpeg' alt='' className='gridImg' />
                <h5>A Duplex</h5>
                <span> An eight bedroom duplex</span>
                <div className='priceTag'>
                  <div className='cashP'>$120.00</div>
                  <div className='cashD'>
                    <button className='button'>Promo</button>
                  </div>
                </div>
                <div className='cardbtn'>Buy Now</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebanner