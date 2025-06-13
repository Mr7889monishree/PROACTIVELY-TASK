import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div id='root'>
      <Navbar/>
      <Home/>
    </div>
  

  )
}

export default App
