import React from 'react';
import { useParams } from 'react-router-dom';
import ProductApi from './api/ProductApi';

const DetailContent = (props) => {
  let { productsN } = useParams();
  const productApi = new ProductApi();

  let product = productApi.getProductById(productsN);

  return (
    <>
      <h1>show some anything</h1>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </>
  );
};

export default DetailContent;
