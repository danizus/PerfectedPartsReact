import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import  superfast from '../images/image 5.png'
import  image6 from '../images/image 6.png'
import  image7 from '../images/image 7.png'
import  image8 from '../images/image 8.png'
import  image2 from '../images/image 2.png'
import  image3 from '../images/image 3.png'
import MyButton from './MyButton'


const About = () => {
  return (
   
    <Container fluid  className='background-image aboutus' >
      <Container>
        <Row   >
            <Col>
           <Row>
           <h7 className="aboutHead">
            ABOUT PERFECTED PARTS
            </h7>
            </Row>
            <p className='aboutText'>Bringing the Automotive Collision and Service Industry together by leveraging assets for the common success of the individual repair center, thus enhancing the overall customer experience, lowering the cost of repairs, and improving profitability.</p>
            <div style={{backgroundColor:"#29302C",width:"5vw",height:"2px"}}></div>
           <div className="buttonAlign"><MyButton padding={"15px 40px"}  text={"CTA button"}/></div>

            </Col>
            <Col   >
            <Row  className='aboutTextBox' >
                <h1 className='aboutText' style={{color:"#51BE69"}}>Purpose</h1>
                <p className='para2' >To solve the discontinuity between collision and service centers allowing them to pull the resources of the over 50,000 providers in the US to relieve supply chain constraints.</p>
</Row>
            <Row className='aboutTextBox' >
            <h1 className='aboutText' style={{color:"#51BE69"}}>Mission</h1>
                <p className='para2' >At Perfected Parts, we solve problems others make you live with. We don’t believe in work around methods, cutting corners or “That’s Good Enough”. We tirelessly work to create, innovate, and achieve our customers’ goals while reducing the overall impact to our planet through conservation and maximizing utilization of resources available.</p>
            </Row>
            

            </Col>
        </Row>

        <div style={{height:"120px"}}></div>

        <div className='tagLine'><div style={{width:"30vw ",height:"2px",backgroundColor:"#D9D9D9"}}> </div> <div>TRUSTED BY MANY</div> <div style={{width:"30vw ",height:"2px",backgroundColor:"#D9D9D9"}}>  </div></div>

        <div className='carIcons'> 
          <img src={superfast} /> 
          <img src={image6} /> 
          <img src={image7} /> 
          <img src={image8} /> 
          <img src={image2} /> 
          <img src={image3} /> 
        
        
         </div>
         


        </Container>
    </Container>
   
  )
}

export default About
