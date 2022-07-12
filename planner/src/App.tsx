import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './pages/Main'
import LoginForm from "./pages/LoginForm";

const App = () => {
  return(
      <>
          <Router>
              <Routes>
                  <Route path='/login' element={<LoginForm />} />
                  <Route path='/home' element={<Main />} />
              </Routes>
          </Router>
      </>
  )
}

export default App;
