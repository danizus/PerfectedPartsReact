import React, { useState } from 'react'
import Sublist3 from "./Sublist3"
import Sublist2 from './Sublist2'


const Sublist = ({item,body,info}) => {
    const[subBody,setSubBody]=useState(false)
    const[subEngine,setSubEngine]=useState(false)


    const handleClick =()=>{
  
        setSubBody(!subBody)
        console.log(subBody)
    
      
    }
    const handleClick1 =()=>{
        setSubEngine(!subEngine)
        console.log("engine:" +subEngine)
  
    }
    
  return (
    <>

    {item.map(item=> <ul ><li style={{display:body?"":"none" }}>
    {item.label} <i onClick={item.label==="BODY PARTS"?handleClick:handleClick1} class="fa-solid fa-chevron-down clicked"></i> </li>
    <li style={{marginLeft:"10px"}}>{info==="BODY PARTS"?<Sublist2  body={subBody} item={item.subs}/>:<Sublist3  body={subEngine} item={item.subs}/>}</li>
    
    
    
    </ul>
    )}
    </>
    
      
  )
}

export default Sublist
