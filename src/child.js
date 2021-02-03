import React from 'react';
import { Component } from "react";

class Child extends Component{
    constructor(props){
        super(props);
        this.state={
         paasGet:this.props.pass
        }
    }
    render(){
       // console.log("thus",this.state.paasGet)
        return(
            <>
            <table>
                <th>no</th>
                <th>name</th>
                <th>age</th>
                <th>edit</th>
                <th>delete</th>
                 {this.state.paasGet.map((item,ind,a)=>(
                     <tr key={ind}>
                         <td>{ind+1}</td>
                         <td>{item.fname}</td>
                         <td>{item.age}</td>
                         <td>{<button id="btn" onClick={
                             ()=>{this.props.passFn(item.fname,item.age,ind)}
                           }>edits</button>}</td>
                           <td>{<button id="btn" onClick={
                             ()=>{this.props.delFn(ind,a)}
                         } >delets</button>}</td>
                        

                     </tr>
                 ))}
            </table>
            </>
        )
    }
}
export default Child;