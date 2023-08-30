import './App.css'
import LogoNoText from './assets/logocopy.png';
import { useRef } from 'react';


function App() {
  const amc = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    amc.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap');
      </style>
      <div className='pageContainer'>
        <div className='navbar'>
          <img className='logo-nav' src={LogoNoText} alt="Logo" />

          <ul className='links'>
            <li className='nav-links' onClick={handleClick}>AMC Signups</li>
            <li className='nav-links'>About Us</li>
          </ul>
          <div className='buttons'>
            <button onClick={(e) => { e.preventDefault(); window.location.href = 'https://forms.gle/t5eBV4xaKTkM6p1Y9'; }} className='amc-button'>Signup For AMCs</button>
            <button onClick={(e) => { e.preventDefault(); window.location.href = 'https://discord.gg/wCZRVq52m7'; }} className='discord-button'>Join Discord</button>
          </div>
        </div>
        <div className='banner-container'>
          <div className='banner'></div>
        </div>
        <div className='amc-section'>
          <div ref={amc} className='amc-card'>
            <h1 className='amc-title'>AMC Signups OPEN</h1>
            <hr className='hr-amc' />
            <p className='amc-content'>The American Mathematics Competitions are a series of competitions for middle and high schoolers, aimed at building problem-solving skills and mathematical knowledge. The first test, the AMC 10/12, is a 25-question, 75-minute, multiple-choice exam, with questions in high school level mathematics. The categories are: algebra, geometry, number theory, counting and probability. </p>
            <h1>how to sign up</h1>
            <p className='amc-content'>to sign up, you MUST fill out the form below AND pay ($6 per test) on the dhs webstore. Make sure to pay or you won't be able to take the test - signups close september 15 at midnight</p>
            <p className='amc-content'>If you are in 10th grade or younger, you can signup for either the AMC 10 or the AMC 12, or both (AMC 10a and AMC 12b or AMC 12a and AMC 10b). If you are in 11th or 12th grade, you may only signup for the AMC 12. It is recommended to signup for both the AMC 10/12 a and b test. Below are the dates for the tests.</p>
            <div className='amc-dates'>
              <p className='amc-date'>AMC 10A/12A: Wednesday November 8, 2023</p>
              <p className='amc-date'>AMC 10B/12B: Tuesday, November 14, 2023</p>
            </div>
            <div className='amc-buttons'>
              <button onClick={(e) => { e.preventDefault(); window.location.href = 'https://forms.gle/t5eBV4xaKTkM6p1Y9'; }} className='amc-button'>Form Link</button>
              <button onClick={(e) => { e.preventDefault(); window.location.href = 'https://dublingaelswebstore.myschoolcentral.com/Index.aspx#/1/product/10267'; }} className='discord-button'>DHS Webstore</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
