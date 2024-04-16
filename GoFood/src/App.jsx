import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './screens/Home'
import Login from './screens/Login'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import SignUp from './screens/SignUp'
import { CartProvider } from './components/ContextReducer'

function App() {

  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} /> 
            <Route exact path="/createuser" element={<SignUp />} /> 
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
