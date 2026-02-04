import React from 'react'

export default function FunctionalComponent(props) {
  return (
    <div>
      <h1>This is a Functional Component</h1>
      <h2>Props: {props.name} city-{props.city} </h2>
    </div>
  )
}


