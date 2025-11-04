import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ChatInterface from "../pages/ChatInterface"
import Login from '../pages/Login'
import Register from '../pages/Register'
import Pricing from '../pages/Pricing'

const MainRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat" element={<ChatInterface/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/SignUp" element={<Register/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
  )
}

export default MainRoutes