import React from 'react';
import { Component } from "react";

class Add extends Component{
  constructor(){
    super();
    this.state={
    a:"",
    b:"",
    op:""
    }
  }
  ss=()=>{
    this.setState({
      a:this.state.a,
      b:this.state.b,
      op:parseInt(this.state.a)+parseInt(this.state.b)

    })
  }

  render(){
    console.log(this.state)
    return(
      <>
      <h2>Add</h2>
      <div>
        value1:<input id="val1" type="text" size="2"
        onChange={(v1)=>{this.setState({a:v1.target.value})}} value={this.state.a}  />
      </div>
      <div>
        value2:<input id="val2" type="text" size="2"
        onChange={(v2)=>{this.setState({b:v2.target.value})}} value={this.state.b}  />
      </div>
      <div>
        <button btn="op" onClick={this.ss}  >op</button>
        <input id="op1" type="text" value={this.state.op}  />
      </div>
      </>
    )
  }
}
export default Add;