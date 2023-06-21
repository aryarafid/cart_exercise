import { useState } from 'react'
import Homepage from './pages/Homepage'
import CartPage from './pages/CartPage'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Homepage />} />
          <Route path="cartpage" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
