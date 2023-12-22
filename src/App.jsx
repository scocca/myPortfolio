import React from 'react'
import './App.css'
import { NavBar } from '../src/Components/NavBar'
import { WhatsApp } from '../src/Components/WhatsApp'
import { Outlet } from 'react-router-dom'

// import { DetailExperience } from './components/DetailExperience.js';

// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

function App() {

  return (
    <React.Fragment>
      
      <NavBar/>
      <div>
      <Outlet/>
      </div>
      <WhatsApp/>
      
    </React.Fragment>
  )
}

export {App}
