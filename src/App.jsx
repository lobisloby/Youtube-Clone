import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { useState } from 'react'

const App = () => { 
  const [slider,setSlider]= useState(false)
  return (
    <>
      <Navbar setSlider={setSlider}/>
      <Routes>
        <Route path="/" element={<Home slider={slider} />} />
        <Route path="/Video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  )
}
export default App
