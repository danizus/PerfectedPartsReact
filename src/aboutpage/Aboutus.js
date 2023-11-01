import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import './about.css'

import fist from "../images/fist.svg";
import worker from '../images/ourValue2ndicon.svg'
import parts from "../images/ourvalue3rdicon.svg";
import advisor1 from "../images/advisor1.png";
import advisor2 from "../images/advisor2.png";
import Footer from "../HomePage/Footer"
import Headerall from './Headerall';

const Aboutus = ({show , setShow} ) => {
  return (
    <>
    <Headerall  show={show} setShow={setShow} pageTitle={"PERFECTED PARTS"} tagline={"Success Driven by Intention!"}/>

      <Container className='welcome' fluid="md">
   
      <Row>

<Col sm={12} md={5} ><h2 className='welcome-heading' >Welcome to Perfected Parts, where excellence meets experience! </h2></Col>
<Col sm={12} md={6}>
<p style={{fontFamily:"inter",fontSize:"20px",}}>Copy
Purpose: To solve the discontinuity between collision and service centers allowing them to pull the resources of the over 50,000 providers in the US to relieve supply chain constraints.<br/><br/> Mission: At Perfected Parts, we solve problems others make you live with. We don’t believe in work around methods, cutting corners or “That’s Good Enough”. We tirelessly work to create, innovate, and achieve our customers’ goals while reducing the overall impact to our planet through conservation and maximizing utilization of resources available.
</p>
</Col>



      </Row>
      
      
     
      </Container>

  

      <div className='About-image'>

      </div>


  <Container className='new-container' fluid="md">
      <h2 style={{fontSize:"40px"}}>Welcome to Perfected Parts.com!</h2>

      <p style={{fontSize:"20px"}} >
      At Perfected Parts, our journey began with a profound realization – the collision repair industry was facing a growing challenge in efficiently managing its resources, particularly the abundance of unused parts scattered across parts rooms nationwide. Mismanagement and the pressures of the market were resulting in a surplus of parts that went untouched, leading to a significant waste of resources. We recognized the need for change, and thus, Perfected Parts was born.<br/><br/> The modern collision repair landscape is marked by increasing demands on repair shops. The need to pre-order and stock parts for potential customers has become a norm, driven by various factors that have extended the timeline for scheduling and repairing vehicles. This often prevents shops from returning unused parts without incurring penalties or even renders the return process impossible. Consequently, countless parts are stockpiled, held in limbo, with hopes of future usability.<br/><br/> This dilemma was rooted in the absence of an effective solution to centrally manage these surplus parts, a challenge amplified within larger MSO organizations. Consequently, parts were often repurchased unnecessarily, exacerbating the issue. Furthermore, as vehicle manufacturers accelerate production and adopt modular parts, purchasing specific components can inadvertently lead to the procurement of entire assemblies. This practice inflates repair costs and leaves shops burdened with surplus inventory or overloading recycle containers with brand new parts. Surprisingly, recycling isn't as environmentally friendly as it might seem; the recycling of underutilized parts generates substantial carbon emissions, forming the core of our environmental impact concern. At Perfected Parts, we believe in transforming this landscape. We're passionate about harnessing the full potential of modular parts, empowering shops to procure only what's necessary while enabling the manufacturing industry to produce vehicles efficiently. This dual approach not only reduces repair costs and cycle times but also significantly minimizes the carbon footprint associated with unused resources.<br/><br/> Our commitment to OEM Parts is unwavering. We understand that OEM Parts are the preferred choice for shops, technicians, and customers alike. We're dedicated to providing comprehensive support for the use of OEM parts in every repair whenever feasible. Our system isn't just about operational convenience and increased profitability; it's about operating faster, delivering superior quality, and fostering an environmentally conscious approach that reduces our collective carbon footprint.<br/><br/> By choosing Perfected Parts, you're joining a movement to revolutionize collision repair resource management. Together, we're redefining industry practices, driving efficiency, and ensuring a sustainable future. Welcome to a world where innovation meets environmental responsibility – welcome to Perfected Parts.Com 
      </p>


  </Container>
  
  <div className='About-2ndimage'>
    <Container fluid="md">
    <div >
      <h2 className='our-values'>Our Values</h2>
      <p style={{color:"#A7A7A7"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</p>

 
    </div>

<div className='main-values-container'>
  <div className='each-values'>
      <div style={{margin:"15%"}}>
        <img src={fist} alt='fist'/>
        <h5 style={{color:"white",fontFamily:"inter",marginTop:"20px"}}>We are Collision</h5>
        <p style={{color:"#A7A7A7"}}>The team at Perfected Parts are Collision People at heart. We understand and have lived the Collision industry for decades. Our solutions are grounded in the reality of day-to-day struggles that need solutions.</p>
      </div>

  </div>
  <div className='each-values' style={{width:"30%"}}>
  <div style={{margin:"15%"}}>
        <img src={worker} alt='worker'/>
        <h5 style={{color:"white",fontFamily:"inter",marginTop:"20px"}}>We are Authentic</h5>
        <p style={{color:"#A7A7A7"}}>Authenticity is to be genuine to 
who we are and what we do in 
every interaction we take 
part in. We are honest, trustworthy, 
reliable and dedicated to a sense 
of purpose that drives our behavior 
to be worthy of the opportunities 
that we have been afforded. </p>
      </div>


  </div>
  <div className='each-values'>
  <div style={{margin:"15%"}}>
        <img src={parts} alt='worker'/>
        <h5 style={{color:"white",fontFamily:"inter",marginTop:"20px"}}>We are Humble</h5>
        <p style={{color:"#A7A7A7"}}>We are given the opportunity 
to earn trust and the ability to
provide others with great 
solutions to improve their lives
daily. We continue to focus on 
the outcome through servant 
leadership for our clients and 
teammates to achieve their
dreams.  </p>
      </div>
  </div>
</div>
</Container>
      </div>
      <Container className='consultantsContainer'>
        <h2 className='titleConsultant' >Business Consultants</h2>
        <h2 className='advisor'>Advisors & Consultants </h2>


        <div className='advisor-container'>
         <div>
          <img src={advisor1} alt="advisor1" />
          <h2 style={{fontSize:"20px",fontFamily:"Orbitron"}}>john Doe</h2>
          <p style={{fontSize:"16px",fontFamily:"inter"}}>Company Role</p>
         </div>
         <div> 
         <img src={advisor2} alt="advisor2" />
          <h2 style={{fontSize:"20px",fontFamily:"Orbitron"}}>john Doe</h2>
          <p style={{fontSize:"16px",fontFamily:"inter"}}>Company Role</p>
         </div>
        </div>


      </Container>

      <Footer/>



  
  
   
</>

  )
}

export default Aboutus
