import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import AuthPage from './components/AuthPage'
import Home from './pages/Home'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    // Implement your login logic here
    setIsAuthenticated(true)
  }

  const handleSignup = () => {
    // Implement your signup logic here
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
                <Home onLogout={handleLogout} /> : 
                <Navigate to="/auth" replace />
            } 
          />
          <Route 
            path="/auth" 
            element={
              isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <AuthPage onLogin={handleLogin} onSignup={handleSignup} />
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}