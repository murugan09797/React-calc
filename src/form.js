import React from 'react';
import {useFormik} from 'formik';
//import { Component } from "react";

 function App1(){
    const formik =useFormik({
        initialValues :{
            fname:'',
            lname:'',
            course:'',
            location:'',
           
        },
        onSubmit:(user)=>{
            console.log(user);
        } 
    })
    return(
        <>z
        <h1>Forms</h1>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
           < div>  <label>FName:</label>
              <input type="text" name="fname" onChange={formik.handleChange}
               value={formik.values.fname}/></div>
            <div>  <label>LName:</label>
              <input type="text" name="lname" onChange={formik.handleChange}
               value={formik.values.lname}/>
            </div>
            <div>  <label>course:</label>
              <input type="text" name="course" onChange={formik.handleChange}
               value={formik.values.course}/>
            </div>
            <div>
            <label>Location:</label>
              <input type="text" name="location" onChange={formik.handleChange}
               value={formik.values.location}/>
            </div>
             <div> <button type="submit" id="btn">submit</button></div>
          </form>
        </>
    )
}
export default App1;