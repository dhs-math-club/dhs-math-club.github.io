import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/logocopy2.png';
import LogoNoText from './assets/logocopy.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap');
    </style>
    <div className='pageContainer'>
      <div className='navbar'>
        <img className='logo-nav' src={LogoNoText} alt="Logo" />

        <ul className='links'>
          <li>AMC Signups</li>
          <li>About Us</li>
        </ul>
        <div className='buttons'>
          <button onClick={(e) => {e.preventDefault();window.location.href='https://forms.gle/t5eBV4xaKTkM6p1Y9';}} className='amc-button'>Signup For AMCs</button>
          <button onClick={(e) => {e.preventDefault();window.location.href='https://discord.gg/wCZRVq52m7';}} className='discord-button'>Join Discord</button>
        </div>
      </div>
      <div className='banner-container'>
        <div className='banner'></div>
      </div>
      
    </div>
    
    </>
  )
}

export default App
