import React from 'react'
import Container from 'react-bootstrap/Container';
import logo from "./images/perfected-logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from './images/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjYxNTM3IDIxLjcwMDlDNi4xNTUxMiAyMS4.svg'




const MyNav = ({setShow,show}) => {
  const toggle = ()=>{
    setShow(!show)


  }


  return (

    
    <Navbar collapseOnSelect expand="lg" className="background">
    <Container style={{marginLeft:"2vw"}} fluid>
      <Navbar.Brand href="#home"><img width="120%" src={logo} alt="logo"  /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{marginLeft:"6vw"}} >
          <Nav.Link style={{color:"white",fontFamily: 'Inter'}} href="#features">Home</Nav.Link>
          <Nav.Link style={{color:"white",fontFamily: 'Inter'}} href="#pricing">About us</Nav.Link>
          <Nav.Link style={{color:"white",fontFamily: 'Inter'}} href="#pricing">Marketplace</Nav.Link>
          <Nav.Link style={{color:"white",fontFamily: 'Inter'}} href="#pricing">How to join</Nav.Link>
          <Nav.Link style={{color:"white",fontFamily: 'Inter'}} href="#pricing">Pricing</Nav.Link>
          <Nav.Link style={{color:"white",fontFamily: 'Inter'}} href="#pricing">Contact us</Nav.Link>
         
        </Nav>

    <Nav style={{marginLeft:"6vw"}} >
      <Nav.Link onClick={toggle} style={{color:"white"}}> <img  src={cart} alt="" srcset="" /> </Nav.Link>



    </Nav>
        </Navbar.Collapse>


      </Container>
     
     
     
     
   
      </Navbar>


        
      
  
  )
}

export default MyNav


