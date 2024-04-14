import React, { Component } from 'react'
export default class Class extends Component {
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
    
  render() {
    return (
      <div>
        <h2>Class component</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.incr}>click Me</button>
      </div>
    )
  }
}
