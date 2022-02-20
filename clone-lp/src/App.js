import './App.css';
import { Route, Switch } from 'react-router-dom';
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
    <div className='App'>
      <Switch>
        <Route exact path='/'>
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

        <Route
          path='/shopping/:category'
          component={() => <ShoppingList MenuData={MenuData} />}
          exact
        />
        <Route
          path='/detail/:id'
          component={() => <Detail productsData={productsData} />}
          exact
        />
        <Route path='/detailpage/:productsN' component={DetailContent} exact />
      </Switch>
    </div>
  );
}

export default App;
