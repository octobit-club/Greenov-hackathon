import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Hiw from './components/Hiw'
import Register from './components/Register'
import Footer from './components/footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Hiw />
      <Register />
      <Footer />
    </div>
  )
}

export default App
