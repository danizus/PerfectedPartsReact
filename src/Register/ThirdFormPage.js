import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import MyButton from '../HomePage/MyButton'

const ThirdFormPage = () => {
    const {formPage,setFormPage,houseQuantity,setHouseQuantity,formData} = useContext(MyContext)

    const handlePayNow = ()=>{
        alert(JSON.stringify(formData))

    }
   
  return (
    <div className='third-form-container'>
     <p>Get started using our peer-to-peer marketplace, managing inventory, locations, and more on our PerfectedParts Dashboard.</p>
    <div> <h4>Your Order</h4></div>
    <div> <p><b>{houseQuantity} locations</b></p></div>
     <h3> ${(149*houseQuantity).toFixed(2)}</h3>
     <h4>Payment</h4>
     <p>All transactions are secure and encrypted.</p>
    
    <div className='credit-card'>
        <input type='radio' checked/>
        <label>credit card</label>
    </div>
    
    <div className='d-flex justify-content-end '><button onClick={handlePayNow}  style={{ padding: "15px 40px", marginLeft: "0" ,fontFamily:"Orbitron",fontWeight:"600"}} className='btn-1' type="submit" >Next step</button></div>

    
    </div>
  )
}

export default ThirdFormPage
