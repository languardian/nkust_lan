import React from 'react'
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App