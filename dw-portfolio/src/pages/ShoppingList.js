import React, { useState, useEffect}from 'react';
import { useNavigate, useParams} from "react-router-dom";

import ProductsApi from '../api/ProductsApi';
import NavCategory from "../components/NavCategory";
import ProductContents from "../components/ProductContents";



const ShoppingList = () => {
    let navigete = useNavigate();
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const productsApi = new ProductsApi();
    useEffect( () => {
        if (category === 'all') {
            setProducts(productsApi.getRecentProducts());
        } else {
            setProducts(productsApi.getProductsByCategory(category));
        }
    }, [category])
    return (
        <>
            <NavCategory goToOtherCategory={ (category) => {
                navigete(`/shopping/${category}`)
            }}/>
            {products.map( (product, i) => {
                return<ProductContents product={product} key={i} />
            })}
        </>
    )
}

export default ShoppingList;
