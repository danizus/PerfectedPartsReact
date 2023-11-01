import React from 'react'
import Headerall from '../aboutpage/Headerall';
import { Col, Row, Container, Form, FormSelect } from 'react-bootstrap';
import MyForm from '../HomePage/MyForm';
import "./Register.css"

const Register = () => {
  return (
    <>
      <Headerall pageTitle={"BECOME A PARTNER"} />
      <Container>
      
        <div className='Register-box'>
        <h6 className='form-heading'>CREATE AN ACCOUNT</h6>
        <Form >
        
       <p> Get started selling your products by filling out the form and submitting your application for approval!</p>
        

        <Row className='mb-3' >
          <Col lg={6} >

            <input

            type="text"
              class="form-control rounded-0"
              placeholder="Full Name"
              required
            />

          </Col>
          <Col  lg={6} className='mb-3'>

            <input
              type="text"
              class="form-control rounded-0"
              placeholder="Store Name"
              required
            />

          </Col>
       
          <Col lg={6} className='mb-3'>

            <input
              type="tel"
              class="form-control rounded-0"
              placeholder="Phone Number"
              required
            />

          </Col>
          <Col lg={6} className='mb-3'>

            <input
              type="text"
              class="form-control rounded-0"
              placeholder="Email"
              required
            />

          </Col>
   
  
          <Col lg={6} className='mb-3'>

            <input
              type="text"
              class="form-control rounded-0"
              placeholder="State"
              required />

          </Col>
          <Col lg={6} className='mb-3'>

            <input
              type="text"
              class="form-control rounded-0"
              placeholder="Address"
              required />

          </Col>
          <Col lg={12} className='mb-3'>

            <input
              type="text"
              class="form-control rounded-0"
              placeholder="USERNAME"
              required />

          </Col>
          <Col lg={6} className='mb-3'>
          <input
              type="password"
              class="form-control rounded-0"
              placeholder="password"
              required />

        

          </Col>
          <Col lg={6} className='mb-3'>
          <input
              type="password"
              class="form-control rounded-0"
              placeholder="Re-Enter password"
              required />

        

          </Col>
         
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
        <Col>
          <input style={{ padding: "15px 40px", marginLeft: "0" }} className='btn-1' type="submit" value="Send A Messsage" formTarget='/login'/>
        </Col>
        </Row>
       

      </Form>
      
        
     

       
        </div>
        



      </Container>
    </>
  )
}

export default Register
