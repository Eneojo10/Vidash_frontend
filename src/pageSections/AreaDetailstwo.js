import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import image from '../Images/TP/DANGEROUSLY.jpg';
import Footer from './Footer';
import { BASE_URL } from '../utils/global';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

function AreaDetailstwo() {
    const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tour_id, setTour] = useState('')
    const [phone, setPhone] = useState('')
    const [time_id, setTime] = useState('')
    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')
    const [tours, setTours] = useState([])
    const [times, setTimes] = useState([])
    const [recent, setRecent] = useState([]);
    const [site, setSite] = useState(null)
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams()



    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/getAllTours`);
                console.log('Tour response:', response.data);

                if (response.data && Array.isArray(response.data.data)) {
                    setTours(response.data.data)
                } else {
                    console.log("Unexpected data format for Tour:", response.data);

                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchTour();
    }, []);

    useEffect(() => {
        const fetchTime = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/getAllTime`);
                console.log('Time response:', response.data);

                if (response.data && Array.isArray(response.data.data)) {
                    setTimes(response.data.data)
                } else {
                    console.log("Unexpected data format for Tour:", response.data);

                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchTime();
    }, []);

    useEffect(() => {
        const fetchRecent = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/getRecent`);
                if (response.data && Array.isArray(response.data.data)) {
                    setRecent(response.data.data);
                } else {
                    console.log("Unexpected data format for Recent:", response.data);
                }

            } catch (error) {
                console.log(error);

            }
        }

        fetchRecent();
    }, []);

    useEffect(() => {
        const fetchSiteDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/getSiteById/${id}`);
                const siteData = response.data?.data;


                if (siteData && typeof siteData.features === 'string') {
                    siteData.features = siteData.features.split('\n');
                }

                setSite(siteData || {});
                setLoading(false);
            } catch (error) {
                console.error('Error fetching site details:', error)
                setError("Failed to load product details.");
                setLoading(false);
            }
        };

        fetchSiteDetails();
    }, [id]);

    const handleSubmit = async () => {

        if (!isChecked) {
            toast.error('Please agree to the terms and conditions before submitting');
            return;
        }


        if (!tour_id || !time_id || !message || !date || !phone || !name || !email) {
            alert('Please fill in all fields');
            return;
        }

        const requestData = {
            name,
            tour_id,
            time_id,
            email,
            phone,
            date,
            message,
        };

        console.log("Submitting the following data:", requestData);

        try {
            const response = await axios.post(`${BASE_URL}/schedules`, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Response from backend:", response.data);

            if (response.data.success) {
                toast.success('Submitted Successfully');
                setName('');
                setEmail('');
                setMessage('');
                setPhone('');
                setTime('');
                setTour('');
                setDate('');
                setIsChecked(false);
            } else {
                toast.error('Failed to submit. Please try again');
            }
        } catch (error) {
            toast.error('An error occured. Please try again later');

        }

    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleTourChange = (event) => {
        setTour(event.target.value);
    }
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const handleCaptchaChange = (value) => {
        console.log("Captcha value:", value);
    };





    return (
        <div>
            <Navigation />
            <div className='area2'>
                <div className='beryl-shelterss'>
                    <div className='ov'>
                        <h4>{site?.property_name}</h4>
                    </div>

                </div>
                <div className='beryl-shelters'>
                    <div className='onn'>
                        {/* <p className='l-ar'>Ongoing</p> */}
                        <div className='lar'>
                            <p>{site?.header}</p>
                        </div>

                        <div className='area2--image'>
                            <img src={site?.imageUrl || '/path-to-default-image.jpg'} alt="Site" />

                        </div>
                        <div className='box0'>
                            <div className='box1-details'>
                                <div className='box1-display'>
                                    <div className='ov'>
                                        <h4>Overview</h4>
                                    </div>
                                    <div className='ov'>
                                        <h4>Property ID: VDCS-01</h4>
                                    </div>
                                </div><br />
                                <div className='boxline'></div>
                            </div>
                        </div><br /><br />
                        <div className='box2'>
                            <div className='box1-displayy'>
                                <div className='ov'>
                                    <h4>Description</h4>
                                </div><br />
                                <div className='boxline'></div><br />
                                <p>{site?.description}</p>

                            </div>

                        </div><br />

                        {/* <div className='box010'>
                            <div className='box1-displayy'>
                                <div>
                                    <h4>Details</h4>
                                </div><br />
                                <div className='boxline'></div><br />
                                <div className='details-color'>

                                </div><br />

                                
                                <div className='boxline'></div>
                            </div>
                        </div><br /> */}
                        <div className='box5'>
                            <div className='box1-displayy'>
                                <div className='ov'>
                                    <h4>Features</h4>
                                </div><br />
                                <div className='boxline'></div><br />
                                <div className='fea-tures'>
                                    <div>
                                        <h5>Green Areas</h5>
                                    </div>
                                    <div>
                                        <h5>Resort and Parks</h5>
                                    </div>
                                    <div>
                                        <h5>Solar Powered Estate</h5>
                                    </div>

                                </div><br />
                                <div className='fea-turess'>
                                    <div>
                                        <h5>Perimeter Fencing</h5>
                                    </div>

                                    <div>
                                        <h5>Security</h5>
                                    </div>

                                </div>

                            </div>
                        </div><br />
                        <div className='box-1'>
                            <div className='box1-displayy'>
                                <div className='ov'>
                                    <h4>Schedule A Tour</h4>
                                </div><br />
                                <div className='boxline'></div><br />
                                <div className='tour'>
                                    <div className='time'>
                                        <h4>Tour Type</h4>
                                        <div className='tour-select'>
                                            <select className='custom-select' value={tour_id} name='tour_id' onChange={handleTourChange}>
                                                <option value='' disabled>Select Tour</option>
                                                {tours.map((e) => (
                                                    <option key={e.id} value={e.id}>
                                                        {e.tour}

                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='time'>
                                        <h4>Date</h4>
                                        <div className='tour-select'>
                                            <DatePicker
                                                selected={date}
                                                onChange={(selectedDate) => setDate(selectedDate)}
                                                placeholderText="Select a date"
                                                dateFormat="yyyy-MM-dd"
                                                className="custom-date-picker"
                                            />
                                        </div>
                                    </div>

                                    <div className='time'>
                                        <h4>Time</h4>
                                        <div className='tour-select'>
                                            <select className='custom-select' value={time_id} name='time_id' onChange={handleTimeChange}>
                                                <option value="in-person">Select</option>
                                                {times.map((e) => (
                                                    <option key={e.id} value={e.id}>
                                                        {e.time}
                                                    </option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>

                                </div><br />

                                <div className='ov'>
                                    <h4>Information</h4>
                                </div><br />
                                <div className='boxline'></div><br />
                                <div className='tour'>
                                    <div className='time'>
                                        <h4>Name</h4>
                                        <div className='tour-select'>
                                            <input type='text' name='name' value={name} onChange={handleNameChange} placeholder='Enter your name'></input>
                                        </div>
                                    </div>

                                    <div className='time'>
                                        <h4>Phone</h4>
                                        <div className='tour-select'>
                                            <input type='phone' name='phone' value={phone} onChange={handlePhoneChange} placeholder='Enter your Phone'></input>
                                        </div>
                                    </div>
                                    <div className='time'>
                                        <h4>Email</h4>
                                        <div className='tour-select'>
                                            <input type='email' name='email' value={email} onChange={handleEmailChange} placeholder='Enter your Email'></input>
                                        </div>
                                    </div>

                                </div>
                                <div className='time'>
                                    <h4>Message</h4>
                                    <div className='tour-select'>
                                        <textarea type='text' name='message' value={message} onChange={handleMessageChange} placeholder='Enter your Email'></textarea>
                                    </div>
                                </div>
                                <div className='agree'>
                                    <input type='checkbox' id='agree' checked={isChecked} onChange={handleCheckboxChange}></input>
                                    <label htmlFor='agree'>By submitting this form I agree to <a href='/terms and condition' className='terms'>Terms of Use</a></label>
                                </div>
                                <br />
                                <div className='tour-button'>
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }} className='tour_btn'>Submit a Tour Request</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='onnn'>

                        <div className='area2-boxshadow'>
                            <div className='area2--boxshadow'>
                                <div className='view-listing'><br />
                                    <div className='vn'>
                                        <img className='rounded' src='https://acerealestates.ng/wp-content/themes/houzez/img/profile-avatar.png' alt='vidash'></img>
                                    </div><br />
                                    <div className='insp--input-tag-v'>
                                        <input type='text' placeholder='Name' name='email' />
                                    </div>
                                    <div className='insp--input-tag-v'>
                                        <input type='phone' placeholder='Phone' name='email' />
                                    </div>
                                    <div className='insp--input-tag-v'>
                                        <input type='text' placeholder='Email' name='email' />
                                    </div>
                                    <div className='tour-select-v'>
                                        <textarea type='text' name='message' placeholder='Message'>Hello, I am interested in [Emerald]</textarea>
                                    </div>
                                    <div className='insp--input-tag-v'>
                                        <select name="propertyType">
                                            <option value="" disabled selected>Select</option>
                                            <option value="apartment">I'm a buyer</option>
                                            <option value="house">I'm a tenant</option>
                                            <option value="condo">I'm an agent</option>
                                            <option value="land">Other</option>
                                        </select>
                                    </div>
                                    {/* <div className="insp--input-tag-v">
                                        <ReCAPTCHA
                                            sitekey={recaptchaKey}
                                            onChange={handleCaptchaChange}
                                        />
                                    </div><br/> */}
                                    {/* <div className='agree'>
                                        <input type='checkbox' id='agree' checked={isChecked} onChange={handleCheckboxChange}></input>
                                        <label htmlFor='agree'>By submitting this form I agree to <a href='/terms and condition' className='terms'>Terms of Use</a></label>
                                    </div> */}
                                    <div className='view-listing-button'>
                                        <button className='listing-btn'>Send Message</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div><br />
                <div className='similar'>
                    <h4>Similar Listings</h4><br />
                    <div className='boxline'></div><br />

                    <div className='similar-listings'>
                        {recent.length > 0 ? (
                            recent.map((recentItem, index) => (
                                <a href={`/ProjectDetails/${recentItem._id}`} key={recentItem._id || index} className='line'>
                                    <div className='card'>
                                        <img src={recentItem.imageUrl || 'default-image.jpg'} alt={recentItem.title || 'Property'} />
                                        <div className='card-color'>
                                            <div className='cd-text'>
                                                <h4>{recentItem.description}</h4>

                                                <p>{recentItem.size || 'Short description of the property'}</p><br />
                                                <div className='apt-deatails'>
                                                    <div className='dtails'>
                                                        <button className='details'>DETAILS</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <p>No recent properties available</p>
                        )}

                    </div><br /><br />
                    <div className='boxline'></div>
                </div>



            </div>
            <ToastContainer />
            <Footer />

        </div>
    )
}

export default AreaDetailstwo