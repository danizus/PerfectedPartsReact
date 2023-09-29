import React from 'react'
import MyNav from './MyNav'
import {Button, Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Header = () => {
  return (
    <Container    fluid  className='background' >
         <MyNav/>
         
         <Row className='text'>
        <Col  xs={12} lg={5}  >
        <h5 className='h5'>Find Auto Parts from our Partners</h5>
        <p className='para' >Search by VIN Lookup or by selecting the year, make, and model.</p>

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
      <Button  variant="success" size="lg" className='button1'>Search</Button>
      </Form>
        
        
        </Col >
       
        <Col    lg={6} sm={12}>
        
        
            <Container   className ="box" >
                <h1 className='text-white'>Become a Partner</h1>
                <p className='diffpara'>Manage your inventory with Perfected Parts, and launch products to the marketplace conveniently</p>
                <Button variant="success" size="lg" style={{textAlign:"center",borderRadius:"50px",padding:"10px 20px",fontFamily:"Orbitron",fontSize:"1rem",marginBottom:"20px"}}>Create an account</Button>
                </Container>
           
               
        
        </Col>
      
        
        </Row>

            
        
    </Container>

    
  )
}

export default Header
