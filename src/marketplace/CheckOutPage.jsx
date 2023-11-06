import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyNav from '../HomePage/MyNav'
import Mymodal from '../HomePage/Mymodal'
import { useSelector } from 'react-redux'

const CheckOutPage = ({show,setShow}) => {
    const items = useSelector((state)=>state.cart) 
  return (
 <>
    <div style={{backgroundColor:"#3b3947",marginTop:"0"}}>
    <Container >
    <MyNav show={show} setShow={setShow}/>
    {show && <Mymodal  show={show}
      onHide={() => setShow(false)} />}
    </Container>
    </div>
    <Container>

      <h5 style={{textAlign:"center",marginTop:"5vh"}}>Checkout</h5>

      <Row>
        <Col lg={6}></Col>
        <Col lg={6} className='sumary-container'>
       
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
                   
                </thead>
            
                <tbody>
                    {items.map((item)=> <tr>
                        <td><a href="#"><img src="" alt="picture" /></a></td>
                        <td >{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price*item.quantity}</td>
                    </tr>)
                  
}
                </tbody>


            </table>


        </Col>


      </Row>
    </Container>
 
 </>
  )
}

export default CheckOutPage
