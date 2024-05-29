

import './App.css'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    // <div className='w-screen  h-screen'>
    // <Home/>
    <div className='h-screen w-screen'>
      <Outlet/>
    </div>
    // </div>
  )
}

export default App
