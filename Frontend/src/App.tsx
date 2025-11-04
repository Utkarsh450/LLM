import React from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'

const App: React.FC = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App