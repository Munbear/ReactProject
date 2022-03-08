import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import ProductsApi from "../api/ProductsApi";
import productsData from "../Data/productsData";

const SearchResult = () => {
    const [searchItems, setSearchItems] = useState('');
    return(
        <>
            <Header setSearchItems={setSearchItems}/>
            {productsData.filter( (value) => {
                if(searchItems == '') {
                    return value
                } else if(value.title.toLowerCase().includes(searchItems.toLowerCase())) {
                    return value
                }
            }).map( (value, key) => {
                return(
                    <div>
                        <p>{value.title}</p>
                    </div>
                );
            })}
        </>
    );
}

export default SearchResult;