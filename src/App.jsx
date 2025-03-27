import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Hiw from './components/Hiw'
import Register from './components/register'


function App() {
  

  return (
    <>
  
        <Navbar/>
          <Hero/>
          <Hiw/>
          <Register/>
        
    </>
  )
}

export default App
