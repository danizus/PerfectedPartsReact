import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import MyNav from '../HomePage/MyNav'
import Mymodal from '../HomePage/Mymodal'
import { useSelector } from 'react-redux'

const CheckOutPage = ({show,setShow}) => {
    const items = useSelector((state)=>state.cart) 
    const total = items.reduce((p,item)=>p+item.price*item.quantity,0)
  return (
 <>
    <div style={{backgroundColor:"#3b3947",marginTop:"0"}}>
    <Container >
    <MyNav show={show} setShow={setShow}/>
    {show && <Mymodal  show={show}
      onHide={() => setShow(false)} />}
    </Container>
    </div>
    <h5 style={{textAlign:"center",marginTop:"5vh"}}>Checkout</h5>
    <Container>

      

      <Row>
        <Col md={12} lg={6}>daniyal</Col>
        <Col md={12} lg={6} className='sumary-container'>
  
       
            <h2 className='mb-4'>In Your Bag</h2>
            <table className='checkout-sumary' >
           
                <thead>
                    <tr>
                        <th>
                        Photo
                        </th>
                        <th>
                        name
                        </th>
                        <th>
                        Qty
                        </th>
                        <th>
                        Total
                        </th>
                     
                    </tr>
                    <tr>
                      <td colspan="4"><hr /></td>
                    </tr>
                  
                </thead>
              
              
          
            
                <tbody>
            
                    {items.length?  items.map((item)=> <>
                      <tr>
                        <td><a href="#"><img width="100px"  src={item.image} alt="picture" /></a></td>
                        <td >{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price*item.quantity}</td>
                    </tr>
                    <tr style={{margin:"10px 0"}}>
                    <td colspan="4"><hr /></td>
                  </tr>
                    </>
                    
                    ):"no item"
                   
                  
}
                </tbody>
                <br/>

                <tfoot>
                 
                  <tr >
                    <td colspan="4"><hr /></td>
                  </tr>
                   <tr>
                   <td colspan="2">subtotal:</td>
                   <td colspan="2">{total}</td>
                 </tr>
                 <tr>
                   <td colspan="2"><b>total</b></td>
                   <td colspan="2">{total}</td>
                 </tr>
                 
                </tfoot>


            </table>

            <div className='discount-input' >
             <div> <input type="text" placeholder='Discound code' /></div>
             <div><button className='discount-button '>Apply</button></div>
              

            </div>
            <div><Button className='checkout-btn' >Make payment</Button></div>
          
        </Col>


      </Row>
    </Container>
 
 </>
  )
}

export default CheckOutPage
