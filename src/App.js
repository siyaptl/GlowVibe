import React from 'react'
import Home from './pages/home'
import {
  BrowserRouter as Router,  
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page - Default Route */}
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  )
}
