import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Hiw from './components/Hiw'
import Register from './components/Register'
import Footer from './components/footer'

function App() {
  

  return (
    <>
  
        <Navbar/>
          <Hero/>
          <Hiw/>
          <Register/>
          <Footer />
    </>
  )
}

export default App
