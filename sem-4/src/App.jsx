import About from './About'
import './App.css'
import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'
import Greet from './Greet'
import React from 'react'
import EvenOdd from './EvenOdd'

export default function App() {
  return (
    <div>
      {/* <FunctionalComponent name="Alice" city="Wonderland" />
      <ClassComponent name="Bob" city="Builderland" /> */}
      <EvenOdd num={12}/>
    </div>
  )
}


// function App() {

//   return (
//     <>
//       {/* <h1>Hello!</h1> */}
//       {/* <Header/>
//       <SideNav/>
//       <MainContent/>
//       <Footer/> */}
//       {/* <Greet/> */}
//       <About/>
//     </>
//   )
// }

// export default App
