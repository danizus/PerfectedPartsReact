import React, { useEffect, useState } from 'react'
import { Button, CloseButton, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MyNav from '../HomePage/MyNav';
import { increment } from '../store/cartSlice';
import { decrement } from '../store/cartSlice';
import Mymodal from '../HomePage/Mymodal';
import up from '../images/up.svg';
import Footer from '../HomePage/Footer';
import { Link } from 'react-router-dom';




const Checkout = ({show,setShow}) => {
  
  useEffect(() => {
    setShow(false)
  }, []);
  const items = useSelector((state)=>state.cart) 
  const dispatch = useDispatch();
  
 const total = items.reduce((p,item)=>p+item.price*item.quantity,0).toFixed(2)
 
 const incrementproduct = (item)=>{
 
  dispatch(increment(item))
 
 

 }

const  decrementProduct=(item)=>{
 
  dispatch(decrement(item))
 
  

 }
 

  return (
    <>
    <div style={{backgroundColor:"#3b3947"}}>
    <Container >
    <MyNav show={show} setShow={setShow}/>
    {show && <Mymodal  show={show}
      onHide={() => setShow(false)} />}
    </Container>
    </div>
   <Container fluid="md">
   
   <Row className="justify-content-between">
    <Col md={12} lg={6}>
      {items.length? items.map(item =><div className='responsive-checkout '  > <div  className='check-out-container'>  <img  src={item.image} alt="" srcset="" /> <div> <h3 style={{display:"flex",flexWrap:"wrap"}}>{item.name}</h3>
      
      <hr/>
   
      <div className='qty-container' >
<div style={{display:"flex"}}>
<div >Qty: </div>   
       <span className='l'>
        <div ><button onClick={()=>decrementProduct(item)} ><i class="fa-solid fa-minus"></i></button></div>
        <span className='qty'>{item.quantity}</span>
        <div><button onClick={()=>incrementproduct(item)}><i class="fa-solid fa-plus"></i></button></div>
        </span>
      
        </div>
      
     
        <div className='price'>
  
          <b>
Price : {(item.price*item.quantity).toFixed(2)}
</b>
</div>


      </div>
    

      </div>
 
      
      <CloseButton />  </div>   </div> ):"no items to show"}
      <div style={{margin:"5vh auto",fontSize:"14px"}}>
      <h2 style={{fontSize:"14px"}}>Delivery Information</h2>
<p>Standard Delivery is 2-4 working days. Any orders placed after 10pm Friday and over the weekend will not be dispatched until Monday, excluding Public Holidays</p>
</div>
     
    
    </Col>
    <Col md={12} lg={5}>
      <div className='total-container'>
        <div className='d-flex justify-content-between'>
          <div>subtotal</div>
          <div>{`$${total}`}</div>
        </div>
        <div className='d-flex justify-content-between'>
          <div>Shipping</div>
          <div>USD $0</div>
        </div>
        <hr/>
        <div className='d-flex justify-content-between'>
          <div><b>Total</b></div>
          <div><b>{`$${total}`}</b></div>
        </div>

        <div className='checkout-button'>
   <Button className='checkout-btn' ><Link style={{color:"black"}} to="/checkoutPage">Check out</Link></Button>

        </div>
        <p>This site is protected by reCAPTCHA and Google <a>Privacy Policy</a> and <a>Terms of Service</a>  apply</p>
        
      </div>
      


      

    </Col>



   </Row>
 
   <a href="#" style={{margin:"4vh auto", display:"flex",justifyContent:"center"}}>

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
   <Footer/>
   </>
  )
}

export default Checkout
