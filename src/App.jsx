// Imports Bibliotecas
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Imports Components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import AssineNetflix from './pages/AssineNetflx/AssineNetflix'
import Registry from './pages/registry/Registry'
import Player from './pages/player/player'


const App = () => {

    return (
        <div>
            <ToastContainer theme='dark' />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/AssineNetflix" element={<AssineNetflix />} />
                <Route path="/Registry" element={<Registry />} />
                <Route path="/player/:id" element={<Player />} />
            </Routes>
        </div>
    )
}

export default App
