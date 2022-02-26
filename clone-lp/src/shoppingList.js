import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ProductApi from './api/ProductApi';

import MenuCards from './MenuCards.js';
import NavBtn from './NavBtn';

const ShoppingList = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const productApi = new ProductApi();
  useEffect(() => {
    if (category === 'all') {
      setProducts(productApi.getRecentProducts());
    } else {
      setProducts(productApi.getProductsByCategory(category));
    }
  }, [category]);

  return (
    <>
      <NavBtn
        goToOtherCategory={(category) => {
          navigate(`/shopping/${category}`);
        }}
      />
      {/* <ItemGroup /> */}
      {products.map((product, i) => {
        return <MenuCards product={product} key={i} />;
      })}
    </>
  );
};

export default ShoppingList;
