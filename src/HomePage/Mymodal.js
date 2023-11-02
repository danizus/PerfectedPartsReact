import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import MyButton from './MyButton';
import { useDispatch, useSelector } from 'react-redux';
import {remove} from "../store/cartSlice"
import { Link, useParams } from 'react-router-dom';


const Mymodal = (props) => {
  const item = useSelector((state)=>state.cart) ;
  const myid = useParams();
  
  
  const dispatch = useDispatch();


  const handleRemove=(productid)=>{
    dispatch(remove(productid))

  }
  

      
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >

<div style={{ padding: "40px" }}>
        <Modal.Header closeButton>

          <Modal.Title id="contained-modal-title-vcenter">
            Shopping cart
          </Modal.Title>
        </Modal.Header>
        </div>

    { item.map((product) => ( 
      <div>
      <Modal.Body >
          <div style={{ borderBottom: "1px solid grey", display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={{display:"inline"}}><img width="40px" src={product.image} alt="" /></div>
              <h7 >{`${product.quantity} X ${product.name}`}</h7>
              <p >
              {product.quantity*product.price}
              </p>
            </div>
            <div onClick={()=>handleRemove(product.id)}>
            <CloseButton />
            
          </div>
          </div>
        
         
          
    
        </Modal.Body>

      
      </div>))}
      <Modal.Footer>
          <MyButton text={"close"} />
          <Link to={`/checkout/${myid}`}><button >Continue shopping</button></Link>
        </Modal.Footer>
     
    </Modal>
  )
}

export default Mymodal
