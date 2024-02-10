import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import Navigation from './Navigation'
import Footer from './Footer'

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };
  return (
    <div>
      <Navigation />
      <div className='contactSec'>
        <h1>Contact Us</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationCustom01'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='First name'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustom02'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Last name'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationCustomUsername'>
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  aria-describedby='inputGroupPrepend'
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  Please choose a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationCustom03'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type='Phone' placeholder='Phone' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* <Row className='mb-3'>
            <Form.Group as={Col} md='3' controlId='validationCustom04'>
              <Form.Label>State</Form.Label>
              <Form.Control type='text' placeholder='State' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustom05'>
              <Form.Label>Zip</Form.Label>
              <Form.Control type='text' placeholder='Zip' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row> */}
          <Form.Group className='mb-3'>
            <Form.Check
              required
              label='Agree to terms and conditions'
              feedback='You must agree before submitting.'
              feedbackType='invalid'
            />
          </Form.Group>
          <Button type='submit'>Submit form</Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact