import React from 'react'

function EvenNo(){
    return <h1>Number is even</h1>
}

function OddNo(){
    return <h1>Number is odd</h1>
}

const EvenOdd = (props) => {
    const num=props.num;
    if(num%2==0){
        return <EvenNo/>
    }
    else{
        return <OddNo/>
    }
}

export default EvenOdd
