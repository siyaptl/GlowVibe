import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import {
  BrowserRouter as Router,  
  Routes,
  Route,
} from "react-router-dom";
import Contact from './pages/contact';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page - Default Route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
