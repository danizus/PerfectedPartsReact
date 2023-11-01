import React from 'react';
import bodytext from "../images/Body Text.png"
import { Container } from 'react-bootstrap';


const OurPlatform = () => {
  return (
    <Container fluid="md">
    <div className='ourPlatform'>  
       <h1 style={{margin:"10vh",fontSize:"40px"}} >OUR PLATFORM</h1>
       <div className='scroll'>
      <img width="50%" src={bodytext}/>
      <div>
      <h3 style={{color:"#57bf6c"}}>INVENTORY MANAGEMENT</h3>
      <h3>Manage your inventory seamlessly via our dashboard. Publish products on the peer to peer marketplace, use, or sell parts via the Perfected Parts Dashboard to keep your inventory moving and in order.</h3>
      </div>
      
      


       </div>
       
    
     </div>
     </Container>
  )
}

export default OurPlatform
