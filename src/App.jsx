import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import hero from './components/hero'
import hiw from './components/hiw'
import agenda from './components/agenda'
import faq from './components/faq'
import form from './components/form'
import footer from './components/footer'
import sponsors from './components/sponsors'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <hero/>
        <hiw/>
        <agenda/>
        <form/>
        <faq/>
        <sponsors/>
        <footer/>
      </div>
    </>
  )
}

export default App
