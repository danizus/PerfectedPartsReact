import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import caller from "../images/caller.png"
import MyForm from "../HomePage/MyForm";





const PriceForm =()=>{
    return(
      <>
        <Container className='callus'>
  
  <Row>
  <Col md="12" lg="6">
      <img src={caller} width="100%"/>
  </Col>
  <Col>
 
  <div style={{padding:"30px"}}>
  <MyForm Heading = {"Create an Account"} Content={"Get started selling your products by filling out the form and submitting your application for approval!"} width={"100%"}/>
  <p style={{marginTop:"25%",fontFamily:"inter"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
  </div>
  
  
  </Col>

  
  
  
  </Row>
  
  
  </Container>
      </>
    )
  }
  
  export default PriceForm;