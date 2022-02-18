import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

import productData from './Data/productData.js';
import mallsData from './Data/mallData.js';
import brandData from './Data/brandData.js';
import { MenuData } from './Data/menuData.js';

import ShoppingList from './shoppingList.js';
import Detail from './Detail.js';
import TabContent from './TabContent';
import Header from './Header.js';
import ItemGroup from './ItemGroup.js';
import SlickSlider from './SlickSlider.js';
import NavMenu from './NavMenu.js';

function App() {
  let [mall, setMall] = useState(mallsData);
  let [product, setProduct] = useState(productData);
  let [brand, setBrand] = useState(brandData);
  let [tab, setTab] = useState(0);

  return (
    <div className='App'>
      <Route exact path='/'>
        <Header />
        <SlickSlider />
        <ItemGroup MenuData={MenuData} />
        <NavMenu setTab={setTab} />
        {product.map((a, i) => {
          return (
            <TabContent
              tab={tab}
              product={product[i]}
              mall={mall[i]}
              brand={brand[i]}
              i={i}
              key={i}
            />
          );
        })}
      </Route>
      <Switch>
        <Route
          path='/:itemN'
          component={() => <ShoppingList MenuData={MenuData} />}
        />
        <Route
          path='/detail/:id'
          component={() => <Detail product={product} />}
        />
      </Switch>
    </div>
  );
}

export default App;
