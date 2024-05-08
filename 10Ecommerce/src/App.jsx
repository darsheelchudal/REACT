import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import MovieComponent from './components/MovieComponent/MovieComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Nav/>
  <Hero/>
  <MovieComponent/>
  </>
  )
}

export default App
