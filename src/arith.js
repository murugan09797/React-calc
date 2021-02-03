import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from "react";

class Arith extends Component{
    constructor(){
        super();
        this.state={
            value1:"",
            value2:""
            
        }
    }
    var  fname=document.getElementById("val1").value;
    var lname=document.getElementById("val2").value;


    Maths=()=>{
            this.setState({value1:"fname"+value2:"lname"});
    }

    render(){
        return(
            <div >
                <div>fnmae:<input type="text" id="val1" /> </div>
                <div>lname:<input type="text" id="val2"  /></div>
                <button type="button" onClick={this.Maths}>just click</button>

            </div>
        )
    }
}