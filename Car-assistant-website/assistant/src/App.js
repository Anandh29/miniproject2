import React from 'react'
import Home from './Home'
import {Route,Routes} from "react-router-dom"
import BotpressChat from './BotpressChat'
import Map from './Map'
import Landing from './landing'
import Page2 from './Page2'
import landing from './landing'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/map" element={<Map/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="/page2" element={<Page2/>}/>
     <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
