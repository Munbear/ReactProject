import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import SlickSlider from "./components/Slider";
import CategoryMenu from "./components/CategoryMenu";

function App() {
  return (
    <div className="App">
        <Header />
        <SlickSlider/>
        <CategoryMenu />
    </div>
  );
}

export default App;
