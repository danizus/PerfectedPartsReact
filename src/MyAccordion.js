import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const MyAccordion = ({title,body}) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='colorAccordion'>{title}</Accordion.Header>
        <Accordion.Body>
         {body}
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    
  )
}

export default MyAccordion
