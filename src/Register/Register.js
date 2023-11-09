import React, { useContext } from 'react'
import Headerall from '../aboutpage/Headerall';
import { Col, Row, Container, Form, FormSelect } from 'react-bootstrap';
import MyForm from '../HomePage/MyForm';
import "./Register.css";
import {useFormik } from 'formik';
import schema from './schemas/schema';
import { MyContext } from './MyContext';




const Register = () => {
  const {formPage,setFormPage,formData,setFormData} = useContext(MyContext)

  const onSubmit = async (value,action)=>{
    setFormData(value)
    console.log(value);
    console.log(action);
    await new Promise((resolve)=>{
      setTimeout(resolve,3000)
    })
    action.resetForm();
    setFormPage(formPage+1);
    
    
   
  
  }






  const {values,handleChange,touched,errors,isSubmitting,handleBlur,handleSubmit} = useFormik({
    initialValues:{
      name:"",
      lastName:"",
      storeName:"",
      phoneNumber:"",
      Email:"",
      State:"",
      Address:"",
      username:"",
      password:"",
      cpassword:""
   
    },
    validationSchema:schema,
    onSubmit,
  }

  )

 
  return (
    <>
    
     
     
     
    
       
        <Form onSubmit={handleSubmit}>
        
       
        

        <Row  >
        <p> Get started selling your products by filling out the form and submitting your application for approval!</p>
          <Col md={12} lg={3}  className='mb-3' >

            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              
              type="text"
              name='name'
              className={`form-control rounded-0 ${errors.name && touched.name?"error-input":""}`}
              placeholder="First Name"
              
            />
            {errors.name && touched.name && <p style={{fontSize:"10px",color:"red"}}>{errors.name}</p>}

          </Col >
          <Col md={12} lg={3}  className='mb-3'>

            <input
            onChange={handleChange}
            value={values.lastName}
            onBlur={handleBlur}
           name='lastName'
            type="text"
            className={`form-control rounded-0 ${errors.lastName && touched.lastName?"error-input":""}`}
              placeholder="Last Name"
              
            />
             {errors.lastName && touched.lastName && <p style={{fontSize:"12px",color:"red"}}>{errors.lastName}</p>}

          </Col>
          <Col  md={12} lg={6} className='mb-3'>

            <input
            onBlur={handleBlur}
              onChange={handleChange}
              value={values.storeName}
              type="text"
              name='storeName'
              className={`form-control rounded-0 ${errors.storeName && touched.storeName?"error-input":""}`}
              placeholder="Store Name"
              
            />
              {errors.storeName && touched.storeName && <p style={{fontSize:"12px",color:"red"}}>{errors.storeName}</p>}
         
           

          </Col>
       
          <Col md={12} lg={6} className='mb-3'>

            <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneNumber}
              type="tel"
              name='phoneNumber'
              className={`form-control rounded-0 ${errors.phoneNumber && touched.phoneNumber?"error-input":""}`}
              placeholder="Phone Number"
              
            />
                {errors.phoneNumber && touched.phoneNumber && <p style={{fontSize:"12px",color:"red"}}>{errors.phoneNumber}</p>}

          </Col>
          <Col md={12} lg={6} className='mb-3'>

            <input
            onBlur={handleBlur}
              onChange={handleChange}
              value={values.Email}
              type="text"
              name='Email'
              className={`form-control rounded-0 ${errors.Email && touched.Email?"error-input":""}`}
              placeholder="Email"
              
            />
                 {errors.Email && touched.Email && <p style={{fontSize:"12px",color:"red"}}>{errors.Email}</p>}

          </Col>
        
  
          <Col md={12} lg={6} className='mb-3'>

            <input
            onBlur={handleBlur}
              onChange={handleChange}
              value={values.State}
              type="text"
              name='State'
              className={`form-control rounded-0 ${errors.State && touched.State?"error-input":""}`}
              placeholder="State"
               />
                {errors.State && touched.State && <p style={{fontSize:"12px",color:"red"}}>{errors.State}</p>}

          </Col>
          <Col md={12} lg={6} className='mb-3'>

            <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.Address}
              type="text"
              name="Address"
          className={`form-control rounded-0 ${errors.Address && touched.Address?"error-input":""}`}
              placeholder="Address"
               />
               {errors.Address && touched.Address && <p style={{fontSize:"12px",color:"red"}}>{errors.Address}</p>}

          </Col>
          <Col md={12} lg={12} className='mb-3'>

            <input
            onBlur={handleBlur}
               onChange={handleChange}
               value={values.username}
              type="text"
              name="username"
              className={`form-control rounded-0 ${errors.username && touched.username?"error-input":""}`}
              placeholder="username"
               />
                {errors.username && touched.username && <p style={{fontSize:"12px",color:"red"}}>{errors.username}</p>}

          </Col>
          <Col md={12} lg={6} className='mb-3'>
          <input
          onBlur={handleBlur}
           onChange={handleChange}
           value={values.password}
              type="password"
              name='password'
              className={`form-control rounded-0 ${errors.password && touched.password?"error-input":""}`}
              placeholder="password"
               />
                {errors.password && touched.password && <p style={{fontSize:"12px",color:"red"}}>{errors.password}</p>}

        

          </Col>
          <Col md={12} lg={6} className='mb-3'>
          <input
          onBlur={handleBlur}
           onChange={handleChange}
           value={values.cpassword}
              type="password"
              name="cpassword"
              className={`form-control rounded-0 ${errors.cpassword && touched.cpassword?"error-input":""}`}
              placeholder="Re-Enter password"
               />
              {errors.cpassword && touched.cpassword && <p style={{fontSize:"12px",color:"red"}}>{errors.cpassword}</p>}

        

          </Col>
         
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
       
        
       
        </Row>
        <div style={{display:"flex",justifyContent:"flex-end"}}><button  disabled={isSubmitting} style={{ padding: "15px 40px", marginLeft: "0" ,fontFamily:"Orbitron",fontWeight:"600"}} className='btn-1' type="submit" >Next step</button></div>

       

      </Form>
      
        
     

       
       
    </>
  )
}

export default Register
