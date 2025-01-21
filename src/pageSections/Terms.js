import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import image from '../Images/TD/TD 2.jpg'
import { MdKeyboardArrowRight, MdArrowUpward } from "react-icons/md";


function Terms() {
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

    // Function to scroll back to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Navigation />

            <div className='terms-bg'>

            </div>
            <br /><br />
            <div className='terms-conditions'>
                <div className='terms--head'>
                    <div><p><a href='/' className='home-terms'>Home</a></p></div>
                    <div>
                        <MdKeyboardArrowRight/>
                    </div>
                    <div><p>Terms and Conditions</p></div>
                </div>
                <div className='terms-header'>
                    <h4>Terms And Conditions</h4>

                </div><br />

                <div className='terms-shadow'>
                    <div className='shadow-one'><br /><br />
                        <div className='terms-details'>
                            <h4>1. Introduction</h4>
                            <p>Welcome to Vidash City Shelters. These terms and conditions outline the rules and regulations for the use of VidashCityShelters Website, located at VidashCityShelter.com.ng

                                By accessing this website, we assume you accept these terms and conditions. Do not continue to use VidashCityShelters if you do not agree to all of the terms and conditions stated on this page.</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>2. Intellectual Property Rights</h4>
                            <p>Unless otherwise stated, VidashCityShelters and/or its licensors own the intellectual property rights for all material on VidashCityShelters. All intellectual property rights are reserved. You may access this from VidashCityShelters for your own personal use subjected to restrictions set in these terms and conditions.</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>3. Restrictions</h4>
                            <h5>You are specifically restricted from all of the following:</h5>
                            <p>
                                <ul className='ddew'>
                                    <li className='bullet'>Using this website to engage in any advertising or marketing.</li>
                                    <li className='bullet'>Publicly performing and/or showing any website material.</li>
                                    <li className='bullet'>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website.</li>
                                    <li className='bullet'>Using this website to engage in any advertising or marketing.</li>
                                    <li className='bullet'>Publishing any website material in any other media without prior consent.</li>

                                </ul><br />
                                Certain areas of this website are restricted from being accessed by you and VidashCityShelters may further restrict access by you to any areas of this website, at any time, in absolute discretion. Any user ID and password you may have for this website are confidential and you must maintain confidentiality as well.
                            </p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>4. Your Privacy</h4>
                            <h2>- Information We Collect</h2>
                            <p>
                                <ul className='ddew'>
                                    <li className='bullet'><span className='pf'>Personal Information:</span> Name, email address, phone number, and any other information you provide.</li>
                                    <li className='bullet'><span className='pf'>Usage Data:</span> Information on how you use our website, such as IP address, browser type, and pages visited.</li>
                                </ul>
                            </p>
                            <h2>- How We Use Your Information</h2>
                            <p>
                                <ul className='ddew'>
                                    <li className='bullet'><span className='pf'>To Provide Services:</span> To respond to inquiries, provide customer support, and process transactions.</li>
                                    <li className='bullet'><span className='pf'>Marketing:</span> To send promotional materials and updates if you have opted in..</li>
                                    <li className='bullet'><span className='pf'>Improvement:</span>To improve our website and services based on user behavior and feedback.</li>
                                </ul>
                            </p>
                            <h2>- Information Sharing</h2>
                            <p>
                                <ul className='ddew'>
                                    <li className='bullet'><span className='pf'>Third-Party Services:</span> We may share your information with trusted third-party service providers to perform functions on our behalf, such as payment processing and data analysis.</li>
                                    <li className='bullet'><span className='pf'>Legal Requirements:</span> We may disclose your information if required by law or to protect our rights.</li>

                                </ul>
                            </p>
                            <h2>- Cookies</h2>
                            <p>Our website uses cookies to enhance user experience and analyze website traffic. You can control the use of cookies through your browser settings.</p>
                            <h2>-  Data Security</h2>
                            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
                            <h2>- Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal information. You can also opt out of receiving marketing communications from us.</p>
                            <h2>-  Changes to This Policy</h2>
                            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                            <h2>- Contact Us</h2>
                            <p>If you have any questions or concerns about our privacy policy, please contact us at hello@VidashCityShelter.com.ng</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>5. No Warranties</h4>
                            <p>This website is provided “as is,” with all faults, and VidashCityShelters express no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>6. Limitation of Liability</h4>
                            <p>In no event shall VidashCityShelters, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. VidashCityShelters, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website..</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>7. Indemnification</h4>
                            <p>Welcome to VidashCityShelters. These terms and conditions outline the rules and regulations for the use of VidashCityShelters Website, located at VidashCityShelter.ng.

                                By accessing this website, we assume you accept these terms and conditions. Do not continue to use VidashCityShelters if you do not agree to all of the terms and conditions stated on this page.</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>8. Severability</h4>
                            <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.

                                By accessing this website, we assume you accept these terms and conditions. Do not continue to use VidashCityShelters if you do not agree to all of the terms and conditions stated on this page.</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>9. Variation of Terms</h4>
                            <p>Vidash City Shelters is permitted to revise these Terms at any time as it sees fit, and by using this website you are expected to review these Terms on a regular basis.

                                By accessing this website, we assume you accept these terms and conditions. Do not continue to use VidashCityShelters if you do not agree to all of the terms and conditions stated on this page.</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>10. Assignment</h4>
                            <p>Vidash City is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
                        </div><br />
                        <div className='terms-details'>
                            <h4>11. Entire Agreement</h4>
                            <p>These Terms constitute the entire agreement between VidashCityShelters and you in relation to your use of this website, and supersede all prior agreements and understandings.</p>
                        </div><br />
                    </div>
                    <div className='shadow-two'><br />
                        <div className='terms2-details'>
                            <h5>Properties</h5>

                            <div className='right-side-image'>

                                <div className='viewed-images-display'>
                                    <div className='viewedimage'>
                                        <img src={image} alt='' />
                                    </div>
                                    <div className='viewed-image'>
                                        <h2>Beryl Shelters</h2>
                                        <p>Limited Offer</p>
                                        {/* <span className='offer'>N5,000,000/Sqms</span> */}
                                    </div>
                                </div><br />
                                <div className='viewed-images-display'>
                                    <div className='viewedimage'>
                                        <img src={image} alt='' />
                                    </div>
                                    <div className='viewed-image'>
                                        <h2>Beryl Shelters</h2>
                                        <p>Limited Offer</p>
                                        {/* <span className='offer'>N5,000,000/Sqms</span> */}
                                    </div>
                                </div><br />
                                <div className='viewed-images-display'>
                                    <div className='viewedimage'>
                                        <img src={image} alt='' />
                                    </div>
                                    <div className='viewed-image'>
                                        <h2>Beryl Shelters</h2>
                                        <p>Limited Offer</p>
                                        {/* <span className='offer'>N5,000,000/Sqms</span> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {showScroll && (
                        <div className='scroll-to-top' onClick={scrollToTop}>
                            <MdArrowUpward className='arrow-up-icon' />
                        </div>
                    )}

                </div>

            </div><br />
            <Footer />
        </div>
    )
}

export default Terms