import React from 'react'
import MyNav from './MyNav'
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Mymodal from './Mymodal';

import search from "../images/Search.svg"
import MyButton from './MyButton';


const Header = ({ show, setShow }) => {







  return (
    <Container fluid={(window.innerWidth <= 768) ? "lg" : "md"}>
      <MyNav show={show} setShow={setShow} />

      {show && <Mymodal show={show}
        onHide={() => setShow(false)} />}
      <Row className='text'>
        <Col xs={12} lg={6}  >
          <h5 className='headingText'>  Find Auto Parts from our Partners</h5>
          <p className='para' >Search by VIN Lookup or by selecting the year, make, and model.</p>

          <Form style={{ marginTop: "20px" }}>
            <Form.Group className="mb-3  " >
              <Form.Control className="edit" type="dropdown" placeholder="VIN lookup" required />

            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control className="edit" type="date" placeholder="Year" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control className="edit" type="text" placeholder="Make" required />
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Control className="edit" type="text" placeholder="Variant" required />
            </Form.Group>
            <MyButton type={"submit"} padding={"15px 40px"} text={"Search"} />
          </Form>
        </Col>

        <Col lg={6} sm={12}>


          <div className="box" >
            <h5 className='box-text'>BECOME A PARTNER</h5>
            <p className='diffpara'>Manage your inventory with Perfected Parts, and launch products to the marketplace conveniently</p>

            <div style={{ display: "flex", justifyContent: "center", textTransform: "uppercase" }}> <MyButton padding={"15px 45px"} text={"Create an Account"} /></div>
          </div>




        </Col>
        <div className='searchIcon'> <img src={search} /> </div>

      </Row>

    </Container>
  )
}

export default Header
