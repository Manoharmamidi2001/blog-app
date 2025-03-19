import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Myhome from './pages/Home'
import AddBlog from './pages/AddBlog'
import ShowBlog from './pages/ShowBlog'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Myhome/>}/>
          <Route path='/postblog' element={<AddBlog/>}/>
          <Route path='/showblog/:id' element={<ShowBlog/>}/>
        </Routes>
    </div>
  )
}

export default App
