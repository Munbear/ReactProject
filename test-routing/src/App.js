import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from "./Pages/ErrorPage";
import Menu from './Pages/Menu'

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/menu' element={<Menu/> }/>
        </Routes>
      </Router>
  );
}

export default App;
