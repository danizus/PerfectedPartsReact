import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logo from "../images/perfected-logo.png";
import clock from "../images/clock.svg";
import phone from "../images/phone.svg" ;
import mail from "../images/mail.svg";
import vector from "../images/Vector.svg"
import "./homepage.css"


           
      






const Footer = () => {
  return (
<div className='footerImage'>
<Container fluid >

  <Row>
    <Col md={12} lg={3} >
    <div className='firsttItem' >
       <img  src={logo} className='logo-setting'/> 
            
                 <p style={{color:"white",fontFamily:"inter",paddingTop:"2vh",fontSize:"16px"}}>Making a positive contribution to the success of the Collision and Service Industries -Intentionally.</p>
                 <div className='social-icons' >
                 <a href='#' ><i  class="fa-brands fa-facebook-f"></i></a>
                 <a href='#' ><i   class="fa-brands fa-x-twitter"></i></a>
                <a href='#'><i   class="fa-brands fa-instagram"></i></a>
               </div>
    </div>
    
    </Col>
    <Col md={12} lg={3}>
    <div className='allItems' >
       <h4  style={{fontFamily:"Orbitron"}}>Company</h4>
                 <div style={{width:"25px",height:"2px",background:"#5dc06e"}}></div>
                 <ul>
                 <li ><i class="fa fa-angle-double-right" aria-hidden="true"> </i><a style={{textDecoration:"none",color:"white"}} href='#'>Privacy Policy </a></li>
                 <li><i class="fa fa-angle-double-right" aria-hidden="true"> </i><a style={{textDecoration:"none",color:"white"}} href='#'>Terms and Conditions</a> </li>
                <li><i class="fa fa-angle-double-right" aria-hidden="true"> </i> <a  style={{textDecoration:"none",color:"white"}}href='#'>Customer Reviews</a> </li>
                  <li><i class="fa fa-angle-double-right" aria-hidden="true">  </i><a style={{textDecoration:"none",color:"white"}} href='#'>Legal Notice</a></li>
                  <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a style={{textDecoration:"none",color:"white"}} href='#'>Contact Us</a></li>
               
                    
                 </ul>

       </div></Col>
    <Col md={12} lg={3}>
    
    <div className='allItems'  >
       <h4 style={{fontFamily:"Orbitron"}}>Quick Links</h4>
                 <div style={{width:"25px",height:"2px",background:"#5dc06e"}}></div>
                 <ul>
                 <li><i class="fa fa-angle-double-right" aria-hidden="true"> </i><a style={{textDecoration:"none",color:"white"}} href='#'> Database Features </a></li>
                 <li><i class="fa fa-angle-double-right" aria-hidden="true"> </i><a style={{textDecoration:"none",color:"white"}} href='#'>Vendor Application</a> </li>
                <li><i class="fa fa-angle-double-right" aria-hidden="true"> </i> <a  style={{textDecoration:"none",color:"white"}}href='#'>Vendor Dashboard</a> </li>
                  <li><i class="fa fa-angle-double-right" aria-hidden="true">  </i><a style={{textDecoration:"none",color:"white"}} href='#'>Shop Products</a></li>
                  <li><i class="fa fa-angle-double-right" aria-hidden="true"></i><a style={{textDecoration:"none",color:"white"}} href='#'>Shop Products</a></li>
               
                    
                 </ul>


     </div>
    
    </Col>
    <Col md={12} lg={3}>
    <div className='allItems'  >
    <h4 style={{fontFamily:"Orbitron"}}>Contact Us</h4>
                 <div style={{width:"25px",height:"2px",background:"#5dc06e"}}></div>
                 <ul>
                 <li > <img src={clock}/><a style={{textDecoration:"none",color:"white"}} href='#'> Working Time <br/> <b> Mon-Fri 9:00AM - <br/>5:00PM EST</b> </a></li>
                 <li > <img src={phone}/> <a style={{textDecoration:"none",color:"white"}} href='#'>Terms and Conditions</a> </li>
                <li ><img src={mail}/> <a  style={{textDecoration:"none",color:"white"}}href='#'>Customer Reviews</a> </li>
                
                 </ul>
       </div>
    
     
  



    
    
    </Col>
    <div  style={{width:"100vw",height:"1px",background:"white",margin:"20px auto" }}></div>
    <div style={{display:"flex",justifyContent:"space-between"}}>
       <div ><img  src={vector} alt="idk"/><span>2023 All Rights Reserved.</span></div>
 <div style={{display:"flex"}} ><p style={{display:"inline-block",marginRight:"2rem"}}>Privacy
 </p><p>Terms & Conditions</p></div>
 </div>
  </Row>
  

</Container>
</div>






//     <div className='footerImage'>
//     <div className='flexItems' >
      
//     
//    
//  
//      


//      

//     <div  style={{width:"90vw",height:"1px",background:"white",margin:"20px auto" }}></div>
//     <div style={{width:"90vw",margin:" auto" }}>
//     <div style={{display:"flex",justifyContent:"space-between"}}>
// <div ><img  src={vector} alt="idk"/><span>2023 All Rights Reserved.</span></div>
// <div style={{display:"flex"}} ><p style={{display:"inline-block",marginRight:"2rem"}}>Privacy
// </p><p>Terms & Conditions</p></div>




//    </div>
//    </div>
    
//     </div>

  )
}

export default Footer
