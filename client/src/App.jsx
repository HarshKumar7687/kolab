import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import EditorPage from './components/EditorPage'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Toaster position="top-center"></Toaster>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editor/:roomId' element={<EditorPage />} />
      </Routes>
    </>
  )
}

export default App
