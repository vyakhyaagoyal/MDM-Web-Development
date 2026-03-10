import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
        color:"blue"
    }
  }

// static getDerivedStateFromProps(props, state) {
//     return {color:props.color}
// }
//this overrides the color in state with the color passed as props. So if we pass color as red, it will override the blue color in state and set it to red. If we pass color as magenta, it will override the red color in state and set it to magenta. If we don't pass any color as props, it will use the default color in state which is blue.

componentDidMount(){
    setTimeout(()=>{
        this.setState({color:"green"})
    },2000)
}
render(){
    return(
        <div>
            <h1>Color is {this.state.color}</h1>
        </div>
    )
}
}


// rconst - snippert for constructor
// gds - snippet for getDerivedStateFromProps
// cdm - snippet for componentDidMount