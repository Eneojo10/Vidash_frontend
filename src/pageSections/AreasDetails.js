import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import image from '../Images/TD/TD 2.jpg'
import Footer from './Footer'
import { TfiViewList } from "react-icons/tfi";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BASE_URL } from '../utils/global';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function AreasDetails() {
    const [area, setArea] = useState([])
    const { areaName } = useParams();



    useEffect(() => {
        if (!areaName) {
            console.error("No area name provided");
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/getAreaByName/name/${areaName}`);
                console.log('Details response:', response.data);

                if (response.data && Array.isArray(response.data.data)) {
                    setArea(response.data.data);
                } else {
                    console.log("Unexpected data format:", response.data);
                }
            } catch (error) {
                console.error('Error fetching area details:', error);
            }
        };

        fetchData();
    }, [areaName]);

    return (
        <div>
            <Navigation />

            <div className='area-section'>
                <div className='area-details'>
                    
                        <div className='area-left-side'>
                            

                                <div className='property-details'>
                                    {area.map((e,index) => (
                                        <div className='property-tag'>
                                        <div className='property-tagg'>
                                            <h3>{e.header}</h3>
                                            <p>{e.overview}</p>
                                        </div>
                                        <h5>1 Property</h5><br />
                                        <a href={`/location/${e._id}`} key={e._id || index}>
                                            <div className='propimage'>
                                                <img src={e.imageUrl} alt='' />
                                                <div className='popbg'>


                                                </div>

                                            </div>
                                        </a>
                                        <div className='prop-box-shadow'>
                                            <div className='beryl'>
                                                <h5>{e.property_name}</h5>
                                                <p>{e.property_location}</p>
                                                <a href='/location' className='line'>
                                                    <div className='propdetailsbtn'>
                                                        <button className='details'>DETAILS</button>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    {/* <div className='default-tag'>
                                    <h5>Sort by: Default Order</h5>
                                </div> */}
                                </div>
                            



                        </div>
                    

                    <div className='area-right-side'>
                        <div className='grid-list'>
                            <div>
                                <TfiViewList />
                            </div>
                            <div>
                                <TfiLayoutGrid2 />
                            </div>
                        </div><br />
                        <div className='area-right-side-boxshadow'>
                            <div className='right-side-image'>
                                <h4>Featured Properties</h4><br />
                                <img src={image} alt='' />
                            </div>
                        </div><br />
                        <div className='area-right-side-boxshadowone'>
                            <div className='right-side-image'>
                                <h4>Property Status</h4><br />
                                <div className='property-status'>
                                    <div className='on-flex'>
                                        <div>
                                            <MdKeyboardArrowRight />
                                        </div>
                                        <div className='ongoing'>
                                            <h1>Ongoing</h1>
                                        </div>
                                    </div>

                                    <div className='on-number'>
                                        <h4>(10)</h4>
                                    </div>

                                </div>
                                <div className='property-status'>
                                    <div className='on-flex'>
                                        <div>
                                            <MdKeyboardArrowRight />
                                        </div>
                                        <div className='ongoing'>
                                            <h1>Completed</h1>
                                        </div>
                                    </div>

                                    <div className='on-number'>
                                        <h4>(3)</h4>
                                    </div>

                                </div>

                            </div>
                        </div><br />
                        <div className='area-right-side-boxshadowone'>
                            <div className='right-side-image'>
                                <h4>Property Type</h4><br />
                                <div className='property-status'>
                                    <div className='on-flex'>
                                        <div>
                                            <MdKeyboardArrowRight />
                                        </div>
                                        <div className='ongoing'>
                                            <h1>Residential</h1>
                                        </div>
                                    </div>

                                    <div className='on-number'>
                                        <h4>(3)</h4>
                                    </div>

                                </div>
                                <div className='property-status'>
                                    <div className='on-flex'>
                                        <div>
                                            <MdKeyboardArrowRight />
                                        </div>
                                        <div className='ongoing'>
                                            <h1>Apartment</h1>
                                        </div>
                                    </div>

                                    <div className='on-number'>
                                        <h4>(3)</h4>
                                    </div>

                                </div>
                                <div className='property-status'>
                                    <div className='on-flex'>
                                        <div>
                                            <MdKeyboardArrowRight />
                                        </div>
                                        <div className='ongoing'>
                                            <h1>Commercial</h1>
                                        </div>
                                    </div>

                                    <div className='on-number'>
                                        <h4>(3)</h4>
                                    </div>

                                </div>

                            </div>
                        </div><br />
                        <div className='area-right-side-boxshadowonetwo'>
                            <div className='right-side-image'>
                                <h4>Recently Viewed</h4><br />
                                <div className='viewed-images-display'>
                                    <div className='viewedimage'>
                                        <img src={image} alt='' />
                                    </div>
                                    <div className='viewed-image'>
                                        <h2>Beryl Shelters</h2>
                                        <p>Limited Offer</p>

                                    </div>
                                </div><br />
                                <div className='viewed-images-display'>
                                    <div className='viewedimage'>
                                        <img src={image} alt='' />
                                    </div>
                                    <div className='viewed-image'>
                                        <h2>Beryl Shelters</h2>
                                        <p>Limited Offer</p>

                                    </div>
                                </div><br />
                                <div className='viewed-images-display'>
                                    <div className='viewedimage'>
                                        <img src={image} alt='' />
                                    </div>
                                    <div className='viewed-image'>
                                        <h2>Beryl Shelters</h2>
                                        <p>Limited Offer</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AreasDetails