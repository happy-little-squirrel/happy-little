import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Franchise from './pages/Franchise';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Drink from './pages/Drink';
import ScrollToTop from './utils/scrollToTop';
import HeaderMenu from './components/HeaderMenu'
import DropDownMenu from './pages/DropDownMenu';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes >
          <Route path="/DropDownMenu" element={
            <>
              <HeaderMenu/>
              <DropDownMenu />
            </>
          }/>
        </Routes>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu/:idMenu" element={<Menu />} />
          <Route path="/Menu/:idMenu/:id" element={<Drink />} />
          <Route path="/Franchise" element={<Franchise />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;