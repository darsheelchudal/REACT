import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

function App() {
     const [counter,setCounter] = useState(0);
    // let counter = 5;
  const addValue = () => {
setCounter(counter => counter+1);

// console.log("Clicked",counter);

   }
   const subValue = () => {
      setCounter(counter => counter-1);

   }
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>Counter value : {counter}</h2>
   <button onClick={addValue}>Increase value {counter}</button>
   <br/>
   <button onClick={subValue}>Decrease value {counter}</button>
   </>
  )
}

export default App
