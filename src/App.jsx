import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    // <div className='w-screen  h-screen'>
    // <Home/>
    <div className='h-screen w-screen'>
      <Header/>
      <Outlet/>
    </div>
    // </div>
  )
}

export default App
