import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const ContentsWrap = styled.div`
  width: 50%;
  display: inline-block;
`;

const ImgContents = styled.div`
  padding: 8px;
  
  img {
    width: 100%;
    border-radius: 6%;
    box-shadow: 2px 1px 7px 0px;
  }
`;


const ProductsInfo = styled.div`
  position: relative;
  left: 12px;
  
  p {
    margin: 0;
  }
`;

const ProductsPrice = styled.p`
  font-weight: bold;
`;



const ProductContents = (props) => {

    let navigate = useNavigate();
    const { product } = props
    return(
        <ContentsWrap onClick={ () => {
            navigate('/detail/' + product.id);
        }}>
            <ImgContents>
                <img src={product.thumnailImage}/>
            </ImgContents>
            <ProductsInfo>
                <p>{product.title}</p>
                <ProductsPrice>{product.price}</ProductsPrice>
            </ProductsInfo>
        </ContentsWrap>
    );
};

export default ProductContents