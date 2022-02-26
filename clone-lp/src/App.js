import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import { productsData } from './Data/productData.js';
import { MenuData } from './Data/menuData.js';
import mallsData from './Data/mallData.js';
import brandData from './Data/brandData.js';

import ShoppingList from './shoppingList.js';
import Detail from './Detail.js';
import TabContent from './TabContent';
import Header from './Header.js';
import ItemGroup from './ItemGroup.js';
import SlickSlider from './SlickSlider.js';
import NavMenu from './NavMenu.js';
import DetailContent from './DetailContent.js';

function App() {
  let [mall, setMall] = useState(mallsData);
  // let [product, setProduct] = useState(MenuData);
  let [brand, setBrand] = useState(brandData);
  let [tab, setTab] = useState(0);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Header />
            <SlickSlider />
            <ItemGroup MenuData={MenuData} />
            <NavMenu setTab={setTab} />
            {productsData.map((a, i) => {
              return (
                <TabContent
                  tab={tab}
                  productsData={productsData[i]}
                  mall={mall[i]}
                  brand={brand[i]}
                  i={i}
                  key={i}
                />
              );
            })}
          </Route>

          <Route path='/shopping/:category' element={() => <ShoppingList />} />
          <Route
            path='/detail/:id'
            element={() => <Detail productsData={productsData} />}
          />
          <Route
            path='/detailpage/:productsN'
            element={DetailContent}
            exact={true}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
