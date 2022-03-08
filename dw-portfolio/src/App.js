import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import ShoppingLIst from './pages/ShoppingList';
import Detail from "./pages/Detail";
import Brand from './pages/Brand';
import Mall from './pages/Mall';
import SearchResult from "./pages/SearchResult";

function App() {
  return (
      <Router>
          <div className='App'>
              <Routes>
                  <Route path='/' element={ <Home /> } />
                  <Route path='/shopping/:category' element={ <ShoppingLIst /> } />
                  <Route path='/detail/:id' element={ <Detail /> } />
                  <Route path='/brand/:shopId' element={<Brand />} />
                  <Route path='/mall/:shopId' element={<Mall />} />
                  <Route path='/result/' element={<SearchResult/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
