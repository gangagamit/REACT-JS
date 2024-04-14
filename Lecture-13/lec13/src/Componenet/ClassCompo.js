import React, { Component } from 'react'
export default class ClassConpo extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
        } 
        }
        incr = ()=>{
            console.log("incr");
            this.setState({count:this.state.count+5})
        }
        dcr = ()=>{
            console.log("dcr");
            this.setState({count:this.state.count-1})
        }
    
  render() {
    return (
      <div>
        <h2>Class component</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.incr}>click Me</button>
        <button onClick={this.dcr}>click Me</button>
      </div>
    )
  }
}
