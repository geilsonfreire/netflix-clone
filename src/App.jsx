// Imports Bibliotecas
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Imports Components
import Home from './pages/home/Home'
import Login from './pages/login/Login'


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
