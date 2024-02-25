import React, { lazy, Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home.js'
// import Exam from './pages/Exam.js'
// import Interview from './pages/Interview.js'
import NavBar from './components/NavBar.js'
import { getData } from './functions/getData.js'
import { MainLoder } from './components/Loders.js'
import { nav_tabs } from './functions/constants.js'

const Home = lazy(() => import('./pages/Home.js'))
const Exam = lazy(() => import('./pages/Exam.js'))
const Interview = lazy(() => import('./pages/Interview.js'))

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavWrap />}>
          <Route path='/' element={<Home />} />
          <Route path='/Exam/:id' element={<Exam data={getData().then(data => data)} />} />
          <Route path='/Interview/:id' element={<Interview />} />
        </Route>
      </Routes>
    </>
  )
}

function NavWrap() {
  const tabs = nav_tabs

  return (
    <>
      <NavBar tabs={tabs} />

      <Suspense fallback={<MainLoder />} >
        <Outlet />
      </Suspense>
    </>
  )
}
