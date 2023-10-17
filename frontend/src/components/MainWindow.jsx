import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import './MainWindow.css'

function MainWindow() {
  
  return (
    <div className="main-background">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default MainWindow