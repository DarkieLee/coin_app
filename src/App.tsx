import { useState } from 'react'
import NavBar from './components/navbar'
import Home from './components/home'
import Market from './components/market'
import ChooseUs from './components/chooseUs'
import JoinUs from './components/joinUs'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/chooseus" element={<ChooseUs />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>
    </>
  )
}

export default App
