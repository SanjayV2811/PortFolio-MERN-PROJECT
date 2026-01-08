import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import LoginRegister from './pages/LoginRegister'
import { AuthContext } from './context/AuthContext'

const App = () => {

  // const {user} = useContext(AuthContext)
  const [token, setToken] = React.useState(localStorage.getItem("token"))

  
  return (
    <Routes>
      <Route path="/" element={token ? <Home token={token} setToken={setToken} /> : <LoginRegister />} />
      <Route path="/login" element={<LoginRegister />} />
    </Routes>
  )
}

export default App