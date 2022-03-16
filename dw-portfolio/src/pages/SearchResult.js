import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import ProductsApi from "../api/ProductsApi";
import productsData from "../Data/productsData";
import {useNavigate, useParams} from "react-router-dom";

const Container = styled.div`
    display: inline-flex;
    position: relative;
    flex-flow: column;
    align-items: center;
    width: 50%;
`;

const ImageWrap = styled.div`
    padding: 10px;
    width: 250px;
    height: 280px;
    
    img{
        width: 100%;
        height: 100%;
    }
`;

const InfoContainer = styled.div`

`;

const SearchResult = () => {
    const [searchItems, setSearchItems] = useState('');
    const naigate = useNavigate();

    return(
        <>
            <Header setSearchItems={setSearchItems} searchItems={searchItems} />

            {productsData.filter( (value) => {
                if(searchItems == '') {
                    return value
                } else if(value.title.toLowerCase().includes(searchItems.toLowerCase())) {
                    return value
                }
            }).map( (value, key) => {
                return(
                    <Container onClick={ () => {
                        naigate('/detail/' + value.id)
                    }}>
                        <ImageWrap>
                            <img src={value.thumnailImage} />
                        </ImageWrap>
                        <InfoContainer>
                            <p>{value.title}</p>
                            <p>{value.price}</p>
                        </InfoContainer>
                    </Container>
                );
            })}

        </>
    );
}

export default SearchResult;