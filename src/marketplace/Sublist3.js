import React, { useState } from 'react'

const Sublist2 = ({item,body}) => {
    
  return (
    <li >

    {item.map(item=><li style={{display:body?"":"none" }}>
    {item.label}
    
    </li>)}
    
       </li>
  )
}

export default Sublist2