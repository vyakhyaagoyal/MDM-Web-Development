import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import React, { Component } from 'react';

let m="vivo"

//class component example
export default class Mobile extends Component{
  render(){
    return(
      <h1>I have {this.props.brand}</h1>
    )
  }
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Mobile brand={m}/>
)


