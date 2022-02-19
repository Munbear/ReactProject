import React, { useState } from 'react';

import MenuCards from './MenuCards.js';
import NavBtn from './NavBtn';

import allData from './Data/allData.js';
import topData from './Data/topData.js';
import pantsData from './Data/pantsData.js';
import outerData from './Data/outerData.js';
import shoesData from './Data/shoesData.js';
import jewelleryData from './Data/jewelleryData.js';
import otherData from './Data/otherData.js';
import bagData from './Data/bagData.js';

const ShoppingList = (props, ItemGroup) => {
  let [CardMenu, setCardMenu] = useState(0);

  let [all, setAll] = useState(allData);
  let [top, setTopData] = useState(topData);
  let [outer, setOuter] = useState(outerData);
  let [pant, setPantData] = useState(pantsData);
  let [bag, setBagData] = useState(bagData);
  let [jewellery, setJewelleryData] = useState(jewelleryData);
  let [other, setOtherData] = useState(otherData);
  let [shoes, setShoesData] = useState(shoesData);

  return (
    <>
      <NavBtn setCardMenu={setCardMenu} top={top} />
      {/* <ItemGroup /> */}
      {top.map((a, i) => {
        return (
          <MenuCards
            setCardMenu={setCardMenu}
            CardMenu={CardMenu}
            all={all[i]}
            top={top[i]}
            pant={pant[i]}
            bag={bag[i]}
            outer={outer[i]}
            jewellery={jewellery[i]}
            shoes={shoes[i]}
            other={other[i]}
            i={i}
            key={i}
          />
        );
      })}
    </>
  );
};

export default ShoppingList;
