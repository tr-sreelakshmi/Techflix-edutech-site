import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Courses  from '../Pages/Courses/Courses'
import Plans from '../Pages/Plans/Plans'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Support from '../Pages/Support/Support'



function LayoutRoutes() {
  return (
    <div>
  <BrowserRouter>
  <Header/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/courses' element={<Courses/>}/>
<Route path='/services' element={<Plans/>}/>
<Route path='/about-us' element={<About/>}/>
<Route path='/contact-us' element={<Contact/>}/>
<Route path='/support-us' element={<Support/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </div>
  )
}

export default LayoutRoutes