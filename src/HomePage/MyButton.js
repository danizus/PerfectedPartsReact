import React from 'react'

import "./homepage.css"


const MyButton = ({ pic, text, padding, type }) => {
  return (
    <>
      <button type={type ? type : ""} style={{ padding: padding }} className='btn-1' >{text} {pic ? <img src={pic ? pic : ""} alt='register' /> : ""}</button>
    </>
  )
}

export default MyButton
