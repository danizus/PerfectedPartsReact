import React from 'react';
import "./howtojoin.css"
import Headerall from '../aboutpage/Headerall'
import Services from '../HomePage/Services';
import groupimg from '../images/group-img.png.png'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../HomePage/Footer"
import Box from './Box';




const Howtojoin = ({show , setShow}) => {
  return (
    <>
    <Headerall show={show} setShow={setShow}  pageTitle={"BECOME A PARTNER"} tagline={"How to Join our Network"}/>
    <div style={{margin:"5px 0"}}>
    <Services/>
    </div>
    <Container style={{marginTop:"5vh",display:"flex",justifyContent:"center",alignItems:"center"}} fluid="md">
    <img src={groupimg}/><p>We’ve more than 2,000+ customer satisfied with our services. See Pricing</p>
    
  </Container>
 <Container>
  <div className='hey' >
      <div className= 'group-img'>

          
          <div className='all-boxes'>
          <h2 className='join-large'>THE 10 STEP PROCESS</h2>
            <Box number={1} content={"Become a Partner"}/>
            <Box number={2} content={"Complete Inventory Spreadsheet (We have services that can help with this)"}/>
            <Box number={3} content={"Upload to the Partner Dashboard."}/>
            <Box number={4} content={"We will enter your Inventory to the system and verify your account."}/>
            <Box number={5} content={"You will receive confirmations that Inventory is entered."}/>
            <Box number={6} content={"Using Smartphone or Tablet - Upload Pictures Items (We have services that can help with this)"}/>
            <Box number={7} content={"Select what you want to list for sale on Marketplace."}/>
            <Box number={8} content={" Assign Permission as needed for reporting and Inventory Control."}/>
            <Box number={9} content={"Watch the Training Videos to learn how to work the system."}/>
            <Box number={10} content={"Your Ready to Use the System"}/>
            
          </div>

      </div>
      <Container>


        <Row style={{color:"black"}}>
          <Col lg={12}>
          <h1 className='join-large2' style={{textAlign:"center"}}>US VS THEM</h1>
          </Col>
          <Col lg={6}>
          <ul className='cross'>
            <li>System built for collision business needs</li>
            <li>Custom Inventory Management System.</li>
            <li>You Control Your Inventory</li>
            <li>Built In Marketplace to sell to others</li>
            <li>Peer-to-Peer Networking foundation.</li>
            <li>Multilevel Reporting and Access Permissions.</li>
            <li>Integration and Acquisition friendly.</li>
            <li>National On-Site Support Available.</li>
            <li>Asset Management Capable in same Program</li>
            <li>Third-Party Asset Verification Reporting Available</li>
            <li>Supports OEM Certification Programs.</li>
            <li>In Person Third Party Auditing Available.</li>
            <li>Built By Collision Experts for Collision Business.</li>
            <li>Revenue Generation.</li>
          </ul>
          </Col>
          <Col lg={6}>
          <ul className='tick'>
            <li>System built for their business.</li>
            <li>Set Inventory Management System.</li>
            <li>They Control Your Inventory</li>
            <li>No Marketplace.</li>
            <li>No Peer-to-Peer Networking.</li>
            <li>Must contact them to get reporting.</li>
            <li>Not built for Integration and Acquisition.</li>
            <li>Only Virtual Support Available.</li>
            <li>Different System to Manage Parts and Assets</li>
            <li>No Third-Party Verification Program.</li>
            <li>Does Not Support EOM Certifications Programs</li>
            <li>No Third-Party Auditing Available</li>
            <li>Built by Parts People with No Collision Operations Experience</li>
            <li>Liability Generation</li>
          </ul>
          </Col>
        </Row>
      </Container>
    </div>

   
    </Container>

    <Footer/>
    
    
  

 
 
  
  
  
    </>
  )
}

export default Howtojoin
