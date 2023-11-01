import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import paper from "../images/896432875643875.png";
import layer from "../images/Layer_1.png";
import inspect from "../images/5327645246532675647.png"
import last from "../images/427536876574756.png";
import arrow from "../images/oh.svg";

import OurPlatform from './OurPlatform';



const Services = () => {
  return (
    <>
    <Container fluid className='image'>
          <p className='ourServices'>OUR SERVICES</p>
          <h5 className='ServiceHeading'  >SOLUTIONS OFFERED BY PERFECTED PARTS</h5>
          </Container>

      <Container fluid="md" >
       <Row >
        <Col xs={12} sm={6} md={6} lg={3} className='iconSectionTop first'  >
          <img  className='icon' src={paper}/>
          <h5 style={{color:"black",textAlign:"left",fontFamily:"Orbitron",paddingTop:"20px",paddingBottom:"20px"  }}>Inventory Management</h5>
          <p   style={{color:"black",textAlign:"left",fontFamily:"inter" }}>Utilizing Perfected Parts Web Solutions to develop maintain, and track lost inventory can significantly boost your operational efficiency, profitability, and customer satisfaction by effectively mitigating revenue, operational costs and frustration.</p>
          <a className='btn'>Read more <img className='arrow'   src={arrow}/> </a>
        </Col>
        <Col className='iconSectionTop'  xs={12} sm={6} md={6} lg={3}    >
        <img  className='icon'src={layer}/>
        <h5 style={{color:"black",textAlign:"left",fontFamily:"Orbitron",paddingTop:"20px",paddingBottom:"20px"  }}>Peer to Peer Marketplace</h5>
        <p  style={{color:"black",textAlign:"left",fontFamily:"inter" }}>Adopting Perfected Parts Web Solutions for Peer-to-Peer Networking capability enables seamless communications between internal locations and facilitates multi-group operations, streamlining collaboration, and enhancing overall organizational efficiency.</p>
        <a className='btn'>Read more <img className='arrow'   src={arrow}/> </a>
        </Col>
        
        <Col className='iconSectionBottom'  xs={12} sm={6} md={6} lg={3}   >
        <img className='icon' src={inspect}/>
        <h5 style={{color:"black",textAlign:"left",fontFamily:"Orbitron",paddingTop:"20px",paddingBottom:"20px"  }}>Market Place Solutions</h5>
        <p  style={{color:"black",textAlign:"left",fontFamily:"inter"}}>Implementing Perfected Parts Marketplace Solutions for managing, transferring, or liquidating inventory can significantly boost profitability and expedite repair times for your business through optimized inventory management and seamless transactions.</p>
        <a className='btn'>Read more <img className='arrow'  src={arrow}/> </a>
        </Col>
        <Col className='iconSectionBottom'  xs={12} sm={6} md={6} lg={3} >
        <img  className='icon'src={last}/>
        <h5 style={{color:"black",textAlign:"left",fontFamily:"Orbitron",paddingTop:"20px",paddingBottom:"20px" }}>Reporting</h5>
        <p  style={{color:"black",textAlign:"left",fontFamily:"inter"}}>By leveraging Perfected Parts Web Solutions Reporting, your business gains the capability to efficiently manage multi-level inventory, transfers, sales, and other operational key performance indicators, resulting in time savings and heightened operational efficiency.</p>
        <a className='btn'>Read more <img  className='arrow'  src={arrow}/> </a>
        </Col>
        </Row>

   
     

      </Container>
     
   
    </>

    
    
  )
}

export default Services
