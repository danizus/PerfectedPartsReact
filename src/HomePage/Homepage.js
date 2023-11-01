import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import { Container } from 'react-bootstrap';
import Header from './Header';
import About from './About';
import Services from './Services';
import Faq from './Faq';
import Contactus from './Contactus';
import Footer from './Footer';
import OurPlatform from './OurPlatform'

const Homepage = ({show,setShow }) => {
  return (
    <>
    <Container  fluid  className='background' >
   <Header show={show} setShow={setShow}/>
   </Container>
   <About />
   <Services/>
   <OurPlatform/>
   <Faq/>
   <Contactus/>
   <Footer/>
    
    </>
    
  )
}

export default Homepage
