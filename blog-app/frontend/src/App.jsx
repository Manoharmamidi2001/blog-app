import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Myhome from './pages/Home'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Myhome/>}/>
        </Routes>
    </div>
  )
}

export default App
