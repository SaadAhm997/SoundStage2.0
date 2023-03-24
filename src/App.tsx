/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HowItWorksPage from './pages/HowItWorksPage';
import { configureStore } from '@reduxjs/toolkit';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/HowItWorks" element={<HowItWorksPage/>}/>
      </Routes>
      <Footer/>
      </div>

      </BrowserRouter>
  );
}

export default App;
