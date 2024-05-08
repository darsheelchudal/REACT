import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Nav/>
    <Hero/>
  
  </>
  )
}

export default App
