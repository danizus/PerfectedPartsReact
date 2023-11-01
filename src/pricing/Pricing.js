import React, { useState } from 'react';
import Headerall from '../aboutpage/Headerall'
import Footer from '../HomePage/Footer';
import { Col, Container, Form, Row } from 'react-bootstrap';
import "./pricing.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MyButton from '../HomePage/MyButton';
import screenshot from "../images/Screen Shot 2023-08-02 at 9.03 1.png"
import MyForm from "../HomePage/MyForm";

import PriceForm from './PriceForm';



const Pricing = ({show , setShow}) => {
  const [key, setKey] = useState('home');
  return (
    <>

    <Headerall show={show} setShow={setShow}  pageTitle={"PRICING"} tagline={"How to Join our Network"}/>
   <div className='pricing-sec'>
    <h2 className='text-center text-uppercase pricing-heading'>Pricing</h2>
    <Container className='my-5'  fluid="md">
    <Tabs

      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 justify-content-center my-4"
    >
      <Tab eventKey="home" title={<TabHeading heading={"Monthly Billing"} subheading={"No Contacts, Cancel Anytime"}/>}>
       <Monthly/>
      </Tab>
      <Tab eventKey="profile" title={<TabHeading heading={"Yearly Billing"} subheading={"Contact Us"}/>}>
      <Yearly/>
      </Tab>
     
    </Tabs>
    



    </Container>

  

    </div>
    <PriceForm/>
  
<Footer/>




   
    </>
  )
}

export default Pricing





const TabHeading = ({heading, subheading})=>{
  return <>
      <div className="d-flex flex-column text-center rounded-pill">
              <h5 className="text-uppercase tabs-heading ">{heading}</h5>
              <p className="tabs-para">{subheading}</p>
      </div>
  </>
}

const Monthly = ()=>{
  return(
  <>
  <div className='monthly-container'>
  <div className='monthly-box'>
  <h2 >Monthly</h2>
  <p>Lorem ipsum dolor sit amet consectetur. Risus risus nulla elit suscipit scelerisque. Eros lorem.</p>
  <h1 style={{fontFamily:"Orbitron"}}>$149</h1>
  <MyButton text={"Start Now"} padding={"10px 6vw"} type/>
  <p className='my-0 '>Everything in included, plus:</p>
  <ul className='cross' >
            <li style={{marginTop:"0"}}> Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur..</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
  </div>
  <div className='inventory'>
  <h2>Inventory Management </h2>
  <p>Lorem ipsum dolor sit amet consectetur. Neque sed risus consequat aenean aenean varius et. Libero maecenas imperdiet pellentesque lorem mattis vel. Semper fermentum odio sagittis egestas scelerisque.
</p>
<img style={{maxWidth:"600px"}} src={screenshot}/>

  </div>
  </div>
  
  </>
  )
}


const Yearly = ()=>{
  return(
    <div className='yearly-container'>
    <div className='contact-box'>
      <h2>Please Contact Us for Yearly Payment Options</h2>
    
      <MyForm/>
      
    </div>
    </div>
  )
}


