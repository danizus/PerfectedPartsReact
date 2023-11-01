import React from 'react'
import Headerall from "../aboutpage/Headerall"
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import "./marketplace.css"
import BasicExample from './BasicExample';
import MyTable from './MyTable';
import GenerateRow from './MyTable';
import Table2 from './Table2';
import Featured from './Featured';
import Footer from "../HomePage/Footer"


import products from "../marketplace/products"


const Marketplace = ({setShow,show}) => {
  return (
    <>
    <Headerall setShow={setShow} show={show} pageTitle={"PRODUCTS"} />
    <Container fluid="md" className='search-container '>
    <Form>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
        <Form.Control
          placeholder="RED BUMPER "
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </Form>
      <div className='search-result-container'>
    <div className='result' style={{width:"30%"}}>
    <h2 >Categories</h2>
    <Form.Select className='btn  rounded-pill w-200' style={{textAlign:"left",color:"white",fontFamily:"Orbitron",backgroundColor:"#57bf6c"}} aria-label="Default select example">
      <option>Year</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Select className='btn  rounded-pill w-200' style={{textAlign:"left",color:"white", fontFamily:"Orbitron",backgroundColor:"#57bf6c"}} aria-label="Default select example">
      <option>Make</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Select className='btn  rounded-pill w-200' style={{textAlign:"left",color:"white", fontFamily:"Orbitron",backgroundColor:"#57bf6c"}} aria-label="Default select example">
      <option>Model</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    {/* <MyTable/> */}
    <Table2/>
    <div style={{display:"flex",justifyContent:"center",marginTop:"10%"}}>
    <button style={{backgroundColor:"#51be69",color:"white",fontFamily:"Orbitron",marginRight:"10px"}} class="btn  rounded-pill px-4 py-2">filter </button> <button style={{ fontFamily:"Orbitron",backgroundColor:"white",border:"1px solid black"}}class="btn  rounded-pill px-3 py-2">clear</button>
    </div>
    </div>
    

    <div >
    <Container >
    <Row >
    {products.map(item =><Col key={item.id} lg={6} className='my-5'><BasicExample width={"70%"}  item={item} id={item.id} img={item.image} title={item.name} description={item.description} price={item.price}/>  </Col>
      
  )}
    </Row>
        
    </Container>
    </div>

      </div>
    
      <Featured/>
    </Container>
    <Footer/>
     
    </>
  )
}

export default Marketplace
