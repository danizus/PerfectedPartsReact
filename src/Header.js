import React from 'react'
import MyNav from './MyNav'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Header = () => {
  return (
    <Container fluid  className='background' >
         <MyNav/>
         <Container className='container'>
         <Row >
        <Col xs={12} lg={6} >
        <h5 className='h5'>Find Auto Parts from our Partners</h5>
        <p >Search by VIN Lookup or by selecting the year, make, and model.</p>

        <Form style={{marginTop:"20px"}}>
      <Form.Group className="mb-3  " >
      <Form.Control className ="edit" type="text" placeholder="VIN lookup" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
      <Form.Control  className ="edit" type="text" placeholder="Year" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control className ="edit" type="text" placeholder="Make" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
      <Form.Control className ="edit" type="text" placeholder="Variant" />
      </Form.Group>
      </Form>
        
        
        </Col >

        <Col lg={6} xs={12}>

            <Container className ="box" >
                <h1>Become a Partner</h1>
                <p>Manage your inventory with Perfected Parts, and launch products to the marketplace conveniently</p>

            </Container>
        
        
        
        </Col>
        
        </Row>

            
         </Container>
    </Container>

    
  )
}

export default Header
