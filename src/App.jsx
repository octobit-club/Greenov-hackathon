import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Hiw from './components/Hiw'
import Register from './components/Register'
import Footer from './components/footer'
import Agenda from './components/agenda'
import Faq from './components/faq'
function App() {
  return (
    <>
  
        <Navbar/>
          <Hero/>
          <Hiw/>
          <Register/>
          <Footer />
          <Agenda />
          <Faq />
    </>
  )
}

export default App
