import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'
import Exam from './pages/Exam.js'

export default function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Exam/:id' element={<Exam />} />
    </Routes>
    </>
  )
}
