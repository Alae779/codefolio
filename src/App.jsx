import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Header from './components/Navbar'
import Experiences from './components/Experiences'
import Home from './components/Home'
import './components/Header.css'
import './components/Home.css'
import MainLayout from './layouts/Mainlayout';

function App() {
  const [currentPage, ChangeCurrentPage] = useState("Home")
  const [name, setName] = useState("Alae")

  return (
    <div style={{textAlign: 'center'}}>
      {currentPage === "Home" ? (
        <Home  />
      ) : currentPage === "Experience" ? (
        <Experiences />
      ) : currentPage === "about" ? (
        <About />
      ) : (
        <div>Not Found</div>
      )}
    </div>vb 
  );
}

export default App
