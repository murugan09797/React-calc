import React, { useContext, useState } from 'react';
import { pass } from './App';
import Std from './std';

function Forms(){
    const get = useContext(pass);
    console.log("get",get)
    return(
        <>
       <ul>
           {
               get.map((i,ind)=>
                   <li key={ind}>
                       {i}
                   </li>
               )
           }
       </ul>

        </>
    )         
}
   
export default Forms; 