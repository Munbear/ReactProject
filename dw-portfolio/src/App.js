import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import ShoppingLIst from './pages/ShoppingList';


function App() {
  return (
      <Router>
          <div className='App'>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/shopping/:category' element={<ShoppingLIst />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
