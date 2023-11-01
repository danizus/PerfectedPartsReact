import React from 'react';

import Container from 'react-bootstrap/Container';
import logo from "../images/perfected-logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cartImg from "../images/buy.svg"
import { Button } from 'react-bootstrap';
import man from "../images/man.svg";
import unchecked from "../images/Profile.svg"
import { Link } from 'react-router-dom';
import MyButton from '../HomePage/MyButton';
import Mymodal from '../HomePage/Mymodal';

const Login = ({setShow,show}) => {
    const toggle = ()=>{
        setShow(!show)
    
    
      }
  return (
   <Container fluid className='nav-background'>
  
    <Container fluid="md">
 
    <Navbar collapseOnSelect expand="lg" >
    <Container style={{marginLeft:"2vw"}} fluid>
       <Navbar.Brand className='logo' href="#home"><img width="120%" src={logo} alt="logo"  /></Navbar.Brand>
      <Navbar.Toggle style={{backgroundColor:"#51be69"}} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{marginLeft:"6vw"}} >
          <Link className='nav-links' to="/"  ><MyButton text={"Log out"} padding={"20px 40px"}/></Link>
         
         
        </Nav>

    <Nav style={{marginLeft:"6vw"}} >
      <a  onClick={toggle} style={{color:"white",position:"relative"}}> <span style={{backgroundColor:"#51be69"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill fw-normal" >1</span> <img   src={cartImg} alt="cart"  /> </a>

    </Nav>

      
        </Navbar.Collapse>


      </Container>
     
     
     
   
      </Navbar>
     
    {show && <Mymodal  show={show}
      onHide={() => setShow(false)} />}
    <div className='title'>
    <h2 className='about-large'>YOUR PROFILE</h2>
   
    </div>

    

    
    </Container>
    </Container>
  )



 
  }

export default Login
