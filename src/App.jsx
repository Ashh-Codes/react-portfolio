

import './App.css'
import Header from './pages/Header'
import './bootstrap.min.css'
import Footer from './pages/Footer'
import Home from './pages/Home'
import About from './pages/About'
import {  Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'




function App() {
  

  return (
    <>
   
    <Header/>
    <Home/>
    
    <Footer/>
   
    </>
  )
}

export default App
