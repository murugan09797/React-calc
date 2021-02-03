import React, { useState } from 'react';
import Forms from './forms';

function Dive(props){

    const[op2,updop2]=useState("");
    
   
     const  division=()=>{
           updop2(props.pass1*props.pass2);
           console.log("props",op2)   
     }
    return(
      <>z
      <h1>divided</h1>

      <button onClick={division} >divission</button>
          {props.pass1}
          {props.pass2}
          {op2 }
      <input  value={op2} />
      
      </>

    )

  }
  function Dive2(params) {
    
  }
  export default Dive;
