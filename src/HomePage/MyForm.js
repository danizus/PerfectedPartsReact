import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import MyButton from './MyButton';
import { Col, Row, Container } from 'react-bootstrap';
import downArrow from "../images/.png"

const MyForm = ({ Heading, Content, width }) => {
  return (
    <>


      <Form style={{ width: "100%" }}>
        <h6 className='form-heading'>{Heading}</h6>
        <p style={{ marginBottom: "4vh", fontFamily: "inter", fontSize: "16px" }}>{Content}</p>

        <Row className='mb-3'>
          <Col class="col-sm-12">

            <input
              type="text"
              class="form-control rounded-0"
              placeholder="Full Name"
              required
            />

          </Col>
          <Col class="col-sm-12 col-md-6 mb-3">

            <input
              type="text"
              class="form-control rounded-0"
              placeholder="Service Needed"
              required
            />

          </Col>
        </Row>
        <Row className='mb-3'>
          <Col class="col-sm-12 col-md-6 mb-3">

            <input
              type="email"
              class="form-control rounded-0"
              placeholder="Email"
              required
            />

          </Col>
          <Col class="col-sm-12 col-md-6 ">

            <input
              type="tel"
              class="form-control rounded-0"
              placeholder="Phone Number"
              required
            />

          </Col>
        </Row>
        <Row>
          <Col class="col-sm-12 mb-4 ">

            <input
              type="text"
              class="form-control rounded-0"
              placeholder="how can we help you?"
              required />

          </Col>
        </Row>
        <Col>
          <input style={{ padding: "15px 40px", marginLeft: "0" }} className='btn-1' type="submit" value="Send A Messsage" />
        </Col>


      </Form>



    </>
  )
}

export default MyForm
