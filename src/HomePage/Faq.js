import React from 'react';
import arrow from "../images/oh.svg"
import { Button, Col, Container, Row } from 'react-bootstrap';
import MyAccordion from '../MyAccordion';
import MyButton from './MyButton';

const Faq = () => {
  return (
    <Container fluid  className='backgroundColor'>
      <Container fluid="md" style={{padding:"60px"}}>
      <p className='ourServices' style={{color:"black"}}>COMMON QUESTION ASKED</p>
      <h5 className='faqHeading' >AUTO PARTS SUPPLY DIGTAL SALES FAQS</h5>
      <Row>
        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4}  className='accordianGap'>
        <MyAccordion title={"Q: Do I have to be a business, or can individuals participate?"} body={"A: No, you do not have to be a business, you can get an individual account and track, trade and get reporting on a single user license."}/>

        </Col>

        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4} className='accordianGap'>
        <MyAccordion title={"Q: I have multiple locations, can your system support that?"} body={"A: Yes, our unique integration of inventory, Peer-to-Peer Networking, B2B Sharing and marketplace allows for seamless management of multiple locations"}/>
        
        </Col>

        
        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4} className='accordianGap'>
        <MyAccordion title={"Q: Do I have to be a business, or can individuals participate?"} body={"A: No, you do not have to be a business, you can get an individual account and track, trade and get reporting on a single user license."}/>

        </Col>
        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4} className='accordianGap'>
        <MyAccordion title={"Q: Do I have to be a business, or can individuals participate?"} body={"A: No, you do not have to be a business, you can get an individual account and track, trade and get reporting on a single user license."}/>

        </Col>

        
        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4} className='accordianGap'>
        <MyAccordion title={"Q: Do I have to be a business, or can individuals participate?"} body={"A: No, you do not have to be a business, you can get an individual account and track, trade and get reporting on a single user license."}/>

        </Col>
        
        
        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4} className='accordianGap'>
        <MyAccordion title={"Q: Do I have to be a business, or can individuals participate?"} body={"A: No, you do not have to be a business, you can get an individual account and track, trade and get reporting on a single user license."}/>

        </Col>

        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4}>
        <MyAccordion title={"Q: I have multiple locations, can your system support that?"} body={"A: Yes, our unique integration of inventory, Peer-to-Peer Networking, B2B Sharing and marketplace allows for seamless management of multiple locations"}/>
        
        </Col>
        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4}>
        <MyAccordion title={"Q: I have multiple locations, can your system support that?"} body={"A: Yes, our unique integration of inventory, Peer-to-Peer Networking, B2B Sharing and marketplace allows for seamless management of multiple locations"}/>
        
        </Col>
       
        <Col  style={{marginTop:"20px"}} sm={12} md={6} lg={4}>
        <MyAccordion title={"Q: I have multiple locations, can your system support that?"} body={"A: Yes, our unique integration of inventory, Peer-to-Peer Networking, B2B Sharing and marketplace allows for seamless management of multiple locations"}/>
        
        </Col>

        

      </Row>
      <div style={{marginBottom:"2vh",display:"flex",justifyContent:"center"}}>
      <MyButton padding={"15px 40px"} text={"Start Your Free Trial"}/>
      </div>
      
      </Container >
      
   </Container>
  )
}

export default Faq
