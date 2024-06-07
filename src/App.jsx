import "./App.css"
import Home from "./components/Home/Home"
import {Outlet} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SwiperEffect from "./components/Cards/SwiperEffect"
import SkateImpact from "./components/SkateImpact"
import About from "./components/About"

function App() {
  return (
    // <div className='w-screen  h-screen'>
    // <Home/>
    <div className="h-screen w-screen">
      <Header/>
      <About/>
      
      <Footer/>
    </div>
  )
}

export default App
