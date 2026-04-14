import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import './components/Header.css'
import './components/Home.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header name="ali"></Header>
    <Home></Home>
    </>
  )
}

export default App
