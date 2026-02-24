import React from 'react'
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"John",
            counter:0
        }
    }

changeName=()=>{
    this.setState({
        name:"Jane"
    })
}

counter=()=>{
    this.setState({
        counter:this.state.counter+1
    })
}

counterd=()=>{
    this.setState({
        counter:this.state.counter-1
    })
}

render()
{
    return(
        <div>
            <h1>Name is: {this.state.name}</h1>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.changeName}>Change Name</button>
            <button onClick={this.counter}>Increment Counter</button>
            <button onClick={this.counterd}>Decrement Counter</button>
        </div>
    )
}
}

export default Counter
