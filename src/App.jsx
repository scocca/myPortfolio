import React from 'react'
import './App.css'
import { NavBar } from '../src/Components/NavBar'
import { WhatsApp } from '../src/Components/WhatsApp'
import { Outlet } from 'react-router-dom'

// import { DetailExperience } from './components/DetailExperience.js';

function App() {

  return (
    <React.Fragment>
      <NavBar/>
      <Outlet/>
      <WhatsApp/>
    </React.Fragment>
  )
}

export {App}
