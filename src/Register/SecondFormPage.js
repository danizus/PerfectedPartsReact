import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyButton from '../HomePage/MyButton';
import { MyContext } from './MyContext';


const SecondFormPage = () => {
    
   const {formPage,setFormPage,houseQuantity,setHouseQuantity} = useContext(MyContext)
   
  const  addQuantity = ()=>{

setHouseQuantity(houseQuantity+1)
   }
  const  removeQuantity = ()=>{
if(houseQuantity===1){
    return 1
}
setHouseQuantity(houseQuantity-1)
   }

    return (
        <>
            <p className='top-text-second-from'>Get started using our peer-to-peer marketplace, managing inventory, locations, and more on our PerfectedParts Dashboard.</p>
            <Container fluid>
                <Row className='light-color-container align-items-center second-form-container'>
                    <Col  >
                        <div className='gap-2 d-flex justify-content-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                                <path d="M11.0004 16.5C11.2465 16.5 11.4528 16.4168 11.619 16.2503C11.7853 16.0839 11.8684 15.8776 11.8684 15.6316V10.7105C11.8684 10.4645 11.7851 10.2582 11.6186 10.0918C11.4521 9.92533 11.2458 9.8421 10.9996 9.8421C10.7535 9.8421 10.5472 9.92533 10.381 10.0918C10.2147 10.2582 10.1316 10.4645 10.1316 10.7105V15.6316C10.1316 15.8776 10.2149 16.0839 10.3814 16.2503C10.5479 16.4168 10.7542 16.5 11.0004 16.5ZM11 7.86033C11.265 7.86033 11.4871 7.77071 11.6663 7.59147C11.8456 7.41222 11.9352 7.19011 11.9352 6.92513C11.9352 6.66016 11.8456 6.43805 11.6663 6.25879C11.4871 6.07954 11.265 5.98992 11 5.98992C10.735 5.98992 10.5129 6.07954 10.3337 6.25879C10.1544 6.43805 10.0648 6.66016 10.0648 6.92513C10.0648 7.19011 10.1544 7.41222 10.3337 7.59147C10.5129 7.77071 10.735 7.86033 11 7.86033ZM11.0019 22C9.48054 22 8.0505 21.7113 6.71181 21.1339C5.37311 20.5565 4.20863 19.7729 3.21838 18.7831C2.2281 17.7932 1.44414 16.6293 0.866484 15.2912C0.288828 13.9531 0 12.5233 0 11.0019C0 9.48054 0.288703 8.0505 0.866108 6.71181C1.44351 5.37311 2.22712 4.20863 3.21693 3.21838C4.20676 2.22811 5.37073 1.44414 6.70883 0.866485C8.04692 0.288829 9.47666 0 10.9981 0C12.5195 0 13.9495 0.288704 15.2882 0.866109C16.6269 1.44351 17.7914 2.22712 18.7816 3.21693C19.7719 4.20676 20.5559 5.37073 21.1335 6.70883C21.7112 8.04692 22 9.47666 22 10.9981C22 12.5195 21.7113 13.9495 21.1339 15.2882C20.5565 16.6269 19.7729 17.7914 18.7831 18.7816C17.7932 19.7719 16.6293 20.5559 15.2912 21.1335C13.9531 21.7112 12.5233 22 11.0019 22ZM11 20.2632C13.586 20.2632 15.7763 19.3658 17.5711 17.5711C19.3658 15.7763 20.2632 13.586 20.2632 11C20.2632 8.41403 19.3658 6.22367 17.5711 4.42893C15.7763 2.63419 13.586 1.73682 11 1.73682C8.41403 1.73682 6.22367 2.63419 4.42893 4.42893C2.63419 6.22367 1.73682 8.41403 1.73682 11C1.73682 13.586 2.63419 15.7763 4.42893 17.5711C6.22367 19.3658 8.41403 20.2632 11 20.2632Z" fill="#E77D30"></path>
                            </svg>
                            <strong class="fs-14">Please pay Attention</strong>
                        </div>

                    </Col>

                    <Col md={12} lg={7}>
                        <p className='text-second-form'>Standard price for one location is $149 USD/mo
                            You’ll pay additional $149 USD/mo for each new location</p>
                    </Col>

                </Row>
                <Row>
                    <Col  lg={9}>
                        How many locations do you have?
                    </Col>
                    <Col  lg={3}>
                   
       <div className='conatiner-quantity'>
        <span>
        <button onClick={removeQuantity} type="button minus-button" class="btn  " aria-invalid="false">
                                            <i class="fas fa-minus" aria-hidden="true"></i>
                                        </button>
        </span>
        <span>
            <input value={houseQuantity} onChange={(e)=>{
               
                setHouseQuantity(e.target.value)
            }} type='number'/>



        </span>
        <span>
        <button onClick={addQuantity} type="button minus-button" class="btn">
                                            <i class="fas fa-plus" aria-hidden="true"></i>
                                        </button>

        </span>

       </div>
    
                    </Col>
                </Row>
<Row>
    <Col lg={9}>
  <span>  Total: </span> <span className='house-total'> ${(149.00*houseQuantity).toFixed(2)}/mo</span> 
    </Col>
    <Col lg={3}>
    <button className='button1 next-step' onClick={()=>{setFormPage(formPage+1)}} style={{color:"white",borderColor:"#51BE69"}}>Next step</button>
    </Col>
</Row>



            </Container>


        </>

    )
}

export default SecondFormPage
