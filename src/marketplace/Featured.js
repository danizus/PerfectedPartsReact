import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BasicExample from './BasicExample';
import products from './products'

const Featured = () => {
  return (
    <div>
        <h1 style={{fontFamily:"Orbitron",fontSize:"56px",marginTop:"4vh"}}>Featured products</h1>
        <Container>
        <Row> 
        {products.map(item=>  
        <Col key={item.id} lg={4} className='my-5'><BasicExample width={"80%"} img={item.image} title={item.name} description={item.description} price={item.price}/></Col>
       
      )}
         </Row>
          
        </Container>
    </div>
  )
}

export default Featured
