import React, { useContext } from 'react'
import Headerall from '../aboutpage/Headerall'
import Register from './Register'
import { Container } from 'react-bootstrap'
import { MyContext } from './MyContext'
import SecondFormPage from './SecondFormPage'
import { useEffect } from 'react'
import ThirdFormPage from './ThirdFormPage'


const AllRegisterForms = ({setShow,show}) => {
    const {formPage,setFormPage} = useContext(MyContext)
    useEffect(() => {
        setFormPage(0);
      }, []);
   
   
   
   
   
   
   
   const showpage = ()=>{
    if(formPage===0){
        return <Register/>
    }else if(formPage===1){
        return <SecondFormPage/>
    }else if(formPage===2){
      return<ThirdFormPage/>
    }

   }
    
  return (
    <>
    <Headerall setShow={setShow} show={show}  pageTitle={"BECOME A PARTNER"} />
    <Container>
      
      <div className='Register-box'>
      <h6 className='form-heading'>CREATE AN ACCOUNT</h6>
     {showpage()}
        
        
        </div>
      </Container>
  </>
  )
}

export default AllRegisterForms
