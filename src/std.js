import React,{Component} from 'react';
import Child from './child'

class Std extends Component{
    constructor(){
      super();
     this.state={
        fname:"",
        age:"",
        arr:[],
        pos:-1,
        add:null
      }
    }
    clr=()=>{
      this.setState({
        fname:"",
        age:""
      })
    }
    save=()=>{
      let array=this.state.arr;
      if(this.state.pos>-1){
        array[this.state.pos].fname=this.state.fname
       array[this.state.pos].age=this.state.age
        this.setState({
          pos:-1,
          arr:array
        },this.clr(),console.log("j",this.state.fname))
      }else{
      array.push({
        fname:this.state.fname,
        age:this.state.age
      })
       this.setState({
         arr:array
       },this.clr(),console.log("fs",this.state.arr))
    }
  }
  delFn=(ind,a)=>{
    this.state.arr.splice(ind,1)
   console.log("lo",this.state.arr)
   this.setState({
     pos:-1
   })
  
  }
  // addBtn=(ind,a)=>{
  //   this.state.arr.splice((ind-ind),1)
  //  console.log("lo",this.state.arr)
  //  this.setState({
  //   add:null
  //  })
  
  // }
  
    passFn=(fn,ag,i)=>{
       this.setState({
         fname:fn,
         age:ag,
         pos:i
       },)
    }
    render(){
     console.log(this.state.add)
      return(
        <>
        <h1>react edits</h1>
        <div>
          fname: <input id="ip1" onChange={(fn)=>this.setState({fname:fn.target.value})} value={this.state.fname}  />
        </div>
        <div>
          age:<input id="ag" onChange={(ag)=>this.setState({age:ag.target.value})}  value={this.state.age}   />
        </div>
        <div>
          <button id="btn" onClick={this.save}>save</button>
        </div>
        <div>
         add: <input id="ad" type="number" size="2" onChange={(ad)=>this.setState({add:ad.target.value})}
                                                  value={this.state.add}   />
        </div>
       
        <Child
        pass={this.state.arr}
        passFn={this.passFn}
        delFn={this.delFn}
        addBtn={this.addBtn}
        />
        </>
      )
    }
   }
  


export default Std;