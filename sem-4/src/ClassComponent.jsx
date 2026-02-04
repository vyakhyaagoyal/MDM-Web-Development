import React,{Component} from 'react'

export default class ClassComponent extends Component{
  render(){
    return (
      <div>
        <h1>This is a Class Component</h1>
        <h2>Props: {this.props.name} city-{this.props.city} </h2>
      </div>
  )
}}


