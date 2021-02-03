import React, { useEffect, useState } from 'react';
import Dive from './dive';

function Multy() {
   
    const [values1,updval1]=useState("");
    const [values2,updval2]=useState("");
     const[op,updop]=useState("")
       const multiple=()=>{
        updop(values2*values1)
         console.log("op",op);
       }
       useEffect(()=>{
         console.log("useeffect");
       },[0])
    return(
    <>z
    <h1>multiple</h1>
       <div>
         val1: <input  id="ip1" type="number"  onChange={(e)=>{updval1(e.target.value)}} value={values1} />
         
       </div>
       <div>
         val2: <input  id="ip2" type="number"  onChange={(ev)=>{updval2(ev.target.value)}} value={values2} />
       </div>
       <div>
           <button onClick={multiple}>click</button>
           <input type="text" value={op} />
       </div>
        </>
    )
  }
  export default Multy;


   
  