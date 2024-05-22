import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    // <div className='w-screen  h-screen'>
    // <Home/>
    <div className='h-screen w-screen  scrollbar-hide overflow-x-hidden'>
      <Outlet/>
    </div>
    // </div>
  )
}

export default App
