import React from 'react';
import "./howtojoin.css"
const Box = ({number,content}) => {
  return (
    <div className='joinus-box'>
      <div><h2 style={{color:"#51BE69",fontFamily:"Orbitron",fontSize:"30px"}}>{number}</h2></div>
      <div><p style={{color:"black"}}>{content}</p></div>
    </div>
  )
}

export default Box
