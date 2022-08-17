import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const App = () => {
  return (
   
<HashRouter>

<Routes>
  
  {/*  Home page*/}
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/project"  element={<Portfolio/>} />
  <Route path="/contact"  element={<Contact/>} />
 
 
</Routes> 
</HashRouter>
  )
}

export default App