import React from 'react';
import { Container } from 'react-bootstrap';
import Mymodal from '../HomePage/Mymodal';
import MyNav from '../HomePage/MyNav';


const Headerall = ({show,setShow,pageTitle,tagline}) => {
  return (
    <Container fluid className='nav-background'>
  
    <Container fluid="md">
    <MyNav show={show} setShow={setShow}/>
    {show && <Mymodal  show={show}
      onHide={() => setShow(false)} />}
    <div className='title'>
    <h2 className='about-large'>{pageTitle}</h2>
    <p className='about-small'>{tagline}</p>
    </div>
    </Container>
    </Container>
  )
}

export default Headerall
