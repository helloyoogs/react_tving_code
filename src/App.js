/*eslint-disable*/
import React from 'react';
import './common.css';
import './App.css';
import { Routes, Route, Link, Router } from 'react-router-dom'
import Onboarding from './onboarding.js';
import Main from './main.js';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='onboarding' element={<Onboarding />} />
      <Route path='main' element={<Main />} />
       
      </Routes>
    </div>
  );
}

export default App;
