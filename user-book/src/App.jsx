import React from 'react'
import {Route , Routes} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

const App = () => {
  return (
    <Routes path='/'>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      {/* <Route path='' element={}></Route> */}
    </Routes>
  )
}

export default App
