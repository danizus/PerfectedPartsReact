import React from 'react';

import Headerall from '../aboutpage/Headerall';
import Footer from '../HomePage/Footer';
import MyForm from "../HomePage/MyForm"
import { Container } from 'react-bootstrap';
import "./contact.css"
import image12 from "../images/image 12.png"



const Contactus = ({show , setShow}) => {
  return (
    <>
    <Headerall show={show} setShow={setShow}  pageTitle={"CONTACT US"} tagline={"How to Join our Network"}/>
    <Container className='form-edit'>
    <div className='form-container'>
      <div className='picture-right'><img className='form-pic' src={image12} alt='form picture'/></div>
    <MyForm Heading={"Get in touch!"} Content={"Lorem ipsum dolor sit amet consectetur quiz ipsum."} width={"100%"}/>

    </div>
    </Container>
    <Footer/>
    </>
  )
}

export default Contactus
