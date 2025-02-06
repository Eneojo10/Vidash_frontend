import React, { useState, useEffect } from 'react';
import { RiHomeGearLine } from "react-icons/ri";
import { AiOutlineBuild } from 'react-icons/ai';
import { FaClipboardCheck } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import image from '../Images/kurudu.webp'
import image1 from '../Images/idu.jpg'
import image2 from '../Images/lugbe.jpg'
import image3 from '../Images/ku_je.jpg'
import axios from 'axios';
import { BASE_URL } from '../utils/global';
import { ToastContainer, toast } from 'react-toastify';




function SectsTwo() {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [location_id, setLocation] = useState('')
  const [property_id, setProperty] = useState('')
  const [information_id, setInfo] = useState('')
  const [inquiry_id, setEnquiry] = useState('')
  const [locate, setLocate] = useState([])
  const [info, setInfor] = useState([])
  const [enquire, setEnquire] = useState([])
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [locationResponse, infoResponse, enquireResponse, propertiesResponse] = await Promise.all([
          axios.get(`${BASE_URL}/getAllLocations`),
          axios.get(`${BASE_URL}/getAllInfo`),
          axios.get(`${BASE_URL}/getAllInquiries`),
          axios.get(`${BASE_URL}/getAllProperties`),
        ]);

        if (locationResponse.data.success) setLocate(locationResponse.data.data);
        if (infoResponse.data.success) setInfor(infoResponse.data.data);
        if (enquireResponse.data.success) setEnquire(enquireResponse.data.data);
        if (propertiesResponse.data.success) setProperties(propertiesResponse.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);

      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const handleSubmit = async () => {
    if (!firstname || !lastname || !email || !property_id || !location_id || !information_id || !inquiry_id) {
      alert('Please fill in all fields');
      return;
    }

    const requestData = {
      firstname,
      lastname,
      email,
      property_id,
      location_id,
      information_id,
      inquiry_id,
    };

    console.log("Submitting the following data:", requestData);

    try {
      const response = await axios.post(`${BASE_URL}/inspections`, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Response from backend:", response.data);

      if (response.data.success) {
        toast.success('Submitted successfully!');
        setFirstname('');
        setLastname('');
        setEmail('');
        setLocation('');
        setProperty('');
        setInfo('');
        setEnquiry('');
      } else {
        toast.error('Failed to submit. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      alert("An error occurred. Please try again later.");
    }
  };




  const handleLocationStatusChange = (event) => {
    setLocation(event.target.value);
  }
  const handleInfoStatusChange = (event) => {
    setInfo(event.target.value);
  }
  const handleEnquiryStatusChange = (event) => {
    setEnquiry(event.target.value);
  }
  const handlePropertyStatusChange = (event) => {
    setProperty(event.target.value);
  }
  const handleFirstnameStatusChange = (e) => {
    setFirstname(e.target.value);
  }
  const handleLastnameStatusChange = (e) => {
    setLastname(e.target.value);
  }
  const handleEmailStatusChange = (e) => {
    setEmail(e.target.value);
  }



  return (
    <div>
      <div className='SectsTwo' id='services'>
        <div className='sects--two'>
          <button className='button'>SERVICES</button><br /><br />
          <div className='hea_ders'>
            <h5>Wide Range Of Services By Vidash City Shelters</h5>
          </div><br /><br />
          <div className='gridSection'>
            <div className='cards'>
              <div className='propertydev'>
                <div className='construction'>
                  <RiHomeGearLine />
                </div>
                <h4>Property Development</h4>
                <p>Our property development services, blends luxury, sustainability, and modern design for exceptional living.</p>
              </div>
            </div>
            <div className='cards'>
              <div className='propertydev'>
                <div className='construction'>
                  <AiOutlineBuild />
                </div>
                <h4>Construction</h4>
                <p>Experience the art of transformation as we reimagine and revitalize spaces, tailored to your unique vision and style.</p>
              </div>
            </div>
            <div className='cards'>
              <div className='propertydev'>
                <div className='construction'>
                  <FaClipboardCheck />
                </div>
                <h4>Facility Management</h4>
                <p>Experience seamless property management with us, we ensure your property is expertly maintained.</p>
              </div>
            </div>
            <div className='cards'>
              <div className='propertydev'>
                <div className='construction'>
                  <FaTools />
                </div>
                <h4>Remodelling & Renovation</h4>
                <p>Transform your spaces with our remodelling and renovation services. We bring your vision to life, enhancing functionality and aesthetics to create a refreshed and modern environment.</p>

              </div>
            </div>
            <div className='cards'>
              <div className='propertydev'>
                <div className='construction'>
                  <FaUserTie />
                </div>
                <h4>Consultancy</h4>
                <p>Unlock expert insights with our consultancy services. We guide you through every stage of your real estate journey, ensuring informed decisions and successful investments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='areas'>
        <div className='areas-navigate'>
          <h3>Explore Areas</h3>
          <p>Discover your future neighborhood. Explore the areas to find your ideal home</p>
        </div>

        <div className='side-image'>
          <a href={`/area/Lugbe`}>
            <div className='right-slide-image'>
              <img src={image2} alt='' />
              <div className='areaoverlay'>
                <div className='over-details'>
                  <p>6 Projects</p>
                  <h5>Lugbe Airport<br /> Road</h5>
                </div>
              </div>
            </div>
          </a>
          <a href={`/area/Idu`}>
            <div className='right-slide-image'>
              <img src={image1} alt='' />
              <div className='areaoverlay'>
                <div className='over-details'>
                  <p>3 Projects</p>
                  <h5>Idu</h5>
                </div>
              </div>
            </div>
          </a>
          <a href={`/area/Kurudu`}>
            <div className='right-slide-image'>
              <img src={image} alt='' />
              <div className='areaoverlay'>
                <div className='over-details'>
                  <p>4 Projects</p>
                  <h5>Kurudu</h5>
                </div>
              </div>
            </div></a>
          <a href={`/area/Kuje`}>
            <div className='right-slide-image'>
              <img src={image3} alt='' />
              <div className='areaoverlay'>
                <div className='over-details'>
                  <p>5 Projects</p>
                  <h5>Kuje</h5>
                </div>
              </div>
            </div></a>
        </div>


      </div>

      <br /><br /><br />
      <div className='layers'>
        <div className='content'>
          <div className="top-design"></div>

          <div className='inspection'>
            <div className="container--">
              <div className='layers-flex'>
                <div className='why'>
                  <h5>Why <br />Vidash City Shelters?</h5>
                </div>
                <div className='numbers'>
                  <h5>01.</h5>
                  <h4>Integrity</h4>
                  <p>We operate with the highest level of <br />honesty, professionalism and integrity <br />at all times.</p>
                </div>
              </div><br />
              <div className='layers-flexx'>
                <div className='numbers'>
                  <h5>02.</h5>
                  <h4>Partnership</h4>
                  <p>We adopt your own goals as our own:<br /> Your success is our success.</p>
                </div>
                <div className='numbers'>
                  <h5>03.</h5>
                  <h4>Excellence</h4>
                  <p>We strive for excellence and aim to <br />provide the highest level of service <br />possible.</p>
                </div>
              </div>

            </div>
            <div className='inspection-form'>
              <div className='insp-details'>
                <h5>Book An Inspection</h5>
                <p>Are you interested in any of our properties? kindly fill this form to schedule a physical inspection</p>
                <div className='insp-select'>
                  <label className='label' htmlFor='inquiry-type'>
                    <p>Inquiry Type</p>
                  </label>
                  <select className='select-dropdown' value={inquiry_id} name='inquiry_id' onChange={handleEnquiryStatusChange}>
                    <option value='' disabled >Select an inquiry type</option>
                    {enquire.map((e) => (
                      <option key={e.id} value={e._id}>
                        {e.inquiries}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='insp-select'>
                  <label className='label' htmlFor='inquiry-type'>
                    <p>Information</p>
                  </label>

                  <select className='select-dropdown' value={information_id} name='information_id' onChange={handleInfoStatusChange}>
                    <option value='' disabled >select</option>
                    {info.map((e) => (
                      <option key={e._id} value={e._id}>
                        {e.information}
                      </option>
                    ))}
                  </select>

                </div>

                <div className='insp--input-tag'>
                  <div className='ins-input'>
                    <input type='text' placeholder='First name' name='firstname' value={firstname} onChange={handleFirstnameStatusChange} />
                  </div>
                  <div className='ins-input'>
                    <input type='text' placeholder='Last name' name='lastname' value={lastname} onChange={handleLastnameStatusChange} />
                  </div>


                </div>
                <div>
                  <input type='text' placeholder='Email' name='email' value={email} onChange={handleEmailStatusChange} />
                </div>
                <div className='insp-select'>
                  <label className='label' htmlFor='inquiry-type'>
                    <p>Location</p>
                  </label>

                  <select
                    // id="inquiry-type"
                    name='location_id'
                    className="select-dropdown"
                    value={location_id}
                    onChange={handleLocationStatusChange}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {locate.map((location) => (
                      <option key={location._id} value={location._id}>
                        {location.locations}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='insp-select'>
                  <label className='label' htmlFor='inquiry-type'>
                    <p>Property</p>
                  </label>

                  <select className='select-dropdown' value={property_id} name='property_id' onChange={handlePropertyStatusChange}>
                    <option value='' disabled >Select type</option>
                    {properties.map((e) => (
                      <option key={e._id} value={e._id}>
                        {e.properties}
                      </option>
                    ))}
                  </select>
                </div><br />

                <div>

                  <button onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }} className='inspection-btn'>Submit</button>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default SectsTwo;
