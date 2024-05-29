import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from "./components/Footer"
import SwiperEffect from './components/Cards/SwiperEffect'

function App() {

  return (
    <>
    {/* <Header/> */}
    <div className='h-screen w-screen'>
      <Outlet/>
    </div>
    {/* <SwiperEffect/> */}
    {/* <Footer/> */}
    </>
    
  )
}

export default App
