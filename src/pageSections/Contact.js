import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { MdArrowUpward } from "react-icons/md";
import WhatsAppButton from './whatsApp/WhatsAppButton';
import { BASE_URL } from '../utils/global';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import Navigation from './Navigation';
import Footer from './Footer';

function Contact() {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone_no, setPhone] = useState('');
  const [validated, setValidated] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isChecked) {
      toast.error('Please agree to the terms and conditions before submitting');
      return;
    }

    if (!fName || !lName || !email || !message || !phone_no) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const requestData = {
      fName,
      lName,
      email,
      message,
      phone_no,
    };

    try {
      const response = await axios.post(`${BASE_URL}/contact`, requestData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.success) {
        toast.success('Message submitted successfully!');
        setFname('');
        setLname('');
        setEmail('');
        setMessage('');
        setPhone('');
        setIsChecked(false);
      } else {
        toast.error('Failed to submit your message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred while submitting your message.');
    }
  };



  return (
    <div>
      <Navigation />
      <div className="contactSec">
        <div className="con-tact">
          <div className="contact--info">
            <h1>Contact Us</h1>
            <p>
              Would you like to know about us, make an enquiry, or tender a
              complaint? Send us a message or contact us through these channels.
            </p>
          </div>
          <div className="form-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="firstName">
                  <Form.Label className='contact-color'style={{color: 'white'}}>First Name<span className="msg">*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name='fName'
                    value={fName}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="Enter your first name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="lastName">
                  <Form.Label className='contact-color'style={{color: 'white'}}>Last Name<span className="msg">*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name='lName'
                    value={lName}
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="Enter your last name"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="email">
                  <Form.Label className='contact-color'style={{color: 'white'}}>Email<span className="msg">*</span></Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="phone">
                  <Form.Label className='contact-color'style={{color: 'white'}}>Phone Number<span className="msg">*</span></Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    name='phone_no'
                    value={phone_no}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
              </Row>
              <Form.Group controlId="message">
                <Form.Label className='contact-color'style={{color: 'white'}}>Message<span className="msg">*</span></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={message}
                  name='message'
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Write your message here..."
                />
              </Form.Group>
              <Form.Group controlId="terms" className="my-3">
                <Form.Check
                  type="checkbox"
                  label="Agree to terms and conditions"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  required
                  className='contact-color'style={{color: 'white'}}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
        {showScroll && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <MdArrowUpward className="arrow-up-icon" />
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Contact;
