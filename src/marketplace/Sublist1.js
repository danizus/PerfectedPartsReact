import React, { useState } from 'react'

import Sublist2 from './Sublist2'
import Sublist3 from "./Sublist3"


const Sublist1 = ({item,engine,info}) => {
    const[subBody,setSubBody]=useState(false)
    const[subEngine,setSubEngine]=useState(false)
  
    const handleClick =()=>{
  
        setSubBody(!subBody)
    
      
    }
    const handleClick1 =()=>{
        setSubEngine(!subEngine)
  
    }
  



  return (
    <>

{item.map(item=><ul>
   

<li style={{display:engine?"":"none"}}>
{item.label}
<i onClick={item.label=="BODY PARTS"?handleClick:handleClick1} class="fa-solid fa-chevron-down clicked"></i>
</li>
<li style={{marginLeft:"10px"}}>{info==="BODY PARTS"?<Sublist2  body={subBody} item={item.subs}/>:<Sublist3  body={subEngine} item={item.subs}/>}</li>

</ul>
)}

   </>
   
   
   )}


export default Sublist1
