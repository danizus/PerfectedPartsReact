import React from 'react';
import info from "./info";
import { useState } from 'react';
import Cars from './GeneratedRow';
import TopList from "./TopList"
import Sublist from './Sublist';
import Sublist1 from './Sublist1';





const MyTable = () => {
  const[body,setBody]=useState(false)
  const[engine,setEngine]=useState(false)

  const handleClick =()=>{

      setBody(!body)
  
    
  }
  const handleClick1 =()=>{
    setEngine(!engine)

  }


  return (

   <>
   {info.map(item=><ul>

       <li style={{display:"flex",justifyContent:"space-between"}}> <TopList item={item.label}/><i onClick={item.label=="BODY PARTS"?handleClick:handleClick1} class="fa-solid fa-chevron-down clicked"></i></li>
       <li style={{marginLeft:"10px"}}>{item.label=="BODY PARTS"?<Sublist info={item.label}    body={body} item={item.subs}/>:<Sublist1 info={item.label} engine={engine} item={item.subs}/>}</li>

   </ul>
   
   
   
   )}
 
   
   
   </>




//     {/* {info.map(name =>   <ul>
//       <li onClick={()=>setDisplay(!display)}>{name.firstName}</li>
//       {name.subRows.map(sub => <ul>
//     <li onClick={()=>setsubDisplay(!subDisplay)} style={{display:subDisplay?"":"none"}}>{sub.firstName}</li>
//         {sub.subRows.map(sub2 =><ul>
//     <li style={{display:subDisplay?"":"none"}}>{sub2.firstName}</li></ul>)}
//       </ul>)}
  
//     </ul>
// )}  */}

  )
}

export default MyTable;



    