import React from 'react'
import Home from './components/Home'
import Todolist from './components/Todolist'
import { Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Todolist" element={<Todolist/>}/>
      </Routes>
    </>
  )
}

export default App