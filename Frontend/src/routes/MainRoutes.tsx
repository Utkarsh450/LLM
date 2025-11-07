import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ChatInterface from "../pages/ChatInterface"
import Login from '../pages/Login'
import Register from '../pages/Register'
import Pricing from '../pages/Pricing'
import Key from '../pages/Key'
import Loginkey from '../pages/Loginkey'

const MainRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat" element={<ChatInterface/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/password" element={<Loginkey/>}/>
        <Route path="/register/password" element={<Key/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
  )
}

export default MainRoutes