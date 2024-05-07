import { useState } from 'react'

import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-100'>
      <h1>hello</h1>
           <Navbar/>
    </div>

    
  )
}

export default App
