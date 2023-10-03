import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';


const Mymodal = (props) => {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
   
  >
  <div style={{padding:"40px"}}>
    <Modal.Header  closeButton>
   
      <Modal.Title   id="contained-modal-title-vcenter">
      Shopping cart 
      </Modal.Title>
    </Modal.Header>
    <Modal.Body >
      <div style={{borderBottom:"1px solid grey",display:"flex",justifyContent:"space-between"}}>
      <div>
      <h7 >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h7>
      <p >
        $100
      </p>
      </div>
      <CloseButton/>
      </div>
      <div style={{borderBottom:"1px solid grey",display:"flex",justifyContent:"space-between"}}>
      <div>
      <h7 >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h7>
      <p  >
        $100
      </p>
      </div>
      <CloseButton/>
      </div>
      <div style={{borderBottom:"1px solid grey",display:"flex",justifyContent:"space-between",margin:"5px"}}>
      <div>
      <h7 >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h7>
      <p >
        $100
      </p>
      </div>
      <CloseButton/>
      </div>
    </Modal.Body>
   
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </div>
  </Modal>
  )
}

export default Mymodal
