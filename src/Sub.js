import React from 'react';
import { Component } from "react";

class Sub extends Component{
  constructor(){
    super();
    this.state={
    val1:"",
    val2:"",
    op1:""
    }
  }
  ss=()=>{
    this.setState({
      val1:this.state.val1,
      val2:this.state.val2,
      op1:parseInt(this.state.val1)-parseInt(this.state.val2)

    })
  }
  

  render(){
    console.log(this.state)
    return(
      <>
      <h2>sub</h2>
      <div>
        value1:<input id="val1s" type="text" size="2"
        onChange={(v1)=>{this.setState({val1:v1.target.value})}} value={this.state.val1}  />
      </div>
      <div>
        value2:<input id="val2s" type="text" size="2"
        onChange={(v2)=>{this.setState({val2:v2.target.value})}} value={this.state.val2}  />
      </div>
      <div>
        <button btn="ops" onClick={this.ss}  >op</button>
        <input id="op1s" type="text" value={this.state.op1}  />
      </div>
      </>
    )
  }
}
export default Sub;