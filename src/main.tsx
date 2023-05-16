import React from 'react';
import ReactDOM from 'react-dom';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/login'
import Footer from './components/estaticos/footer/Footer';





ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route  path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);