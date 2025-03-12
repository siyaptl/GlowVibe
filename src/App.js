import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact';
import {
  BrowserRouter as Router,  
  Routes,
  Route,
} from "react-router-dom";
import Shopall from './pages/shopall';
import Makeup from './pages/makeup';
import Skincare from './pages/skincare';
import Faq from './pages/faq';
import Description from './pages/productdescription'; 
import Login from './pages/login';
import Cart from './pages/cart';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page - Default Route */}
        <Route path="/" element={<Home />} />
        <Route path="/shopall" element={<Shopall />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}