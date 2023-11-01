import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import engineImage from '../images/contact-img.png';

import up from '../images/up.svg';
import MyForm from './MyForm';





const Contactus = () => {
  return (
<Container style={{marginTop:"15vh",marginBottom:"15vh"}} fluid="md">
<Row>
    <Col md="12" lg="6">
        <img src={engineImage} width="100%"/>
    </Col>
    <Col>
    <h2 style={{fontFamily:"Orbitron",fontSize:"20px"}}>CONTACT US</h2>
    <MyForm Heading = {"Have a question?"} Content={"Lorem ipsum dolor sit amet consectetur quiz ipsum"} width={"100%"}/>
   
   

    </Col>

    

</Row>
<a href="#" style={{marginTop:"4vh", display:"flex",justifyContent:"center"}}>

<img style={
    {
        backgroundColor:"#57bf6c",
        padding:"20px",
        borderRadius:"70px",
        textAlign:"center"
        
       

    }
    } src={up}/>

</a>

</Container>
  )
}

export default Contactus
