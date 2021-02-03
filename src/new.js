import React, { useState } from 'react';

function One() {
const [name,setName]=useState("murugan")
const change=()=>{
   setName("selva"+"king");
}
const [arr,setArr]=useState(["muru"])
const changeArr=()=>{
    setArr(["kohli","sachin"])
    console.log("arr",arr);
}
return(
    <>
    <div>
    <h1>1 variable</h1>
    <h1>{name}</h1>
    <button onClick={change} >click</button>
    </div>
    <div>
     <h1> 2array</h1>
     
     <button onClick={changeArr}>array</button>
     <li>
         {
     arr.map((i,ind)=>(
        <ul key={ind}>{ind+1} name: {i}</ul> 
    )
     )
     }
     
    </li>
    </div>
    </>
}
export default One;