import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import ProductsApi from "../api/ProductsApi";
import styled from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import DetailHeader from "../components/DetailHeader";
import DetailTab from "../components/DetailTab";
import Modal from '../components/Modal';
import {AiFillPushpin} from "react-icons/ai";
import DetailInfo from "../components/DetailInfo";


const ItemTitle = styled.p`
  font-size: 20px;
`;

const ItemPrice = styled.p`
  font-size: 50px;
  font-weight: bold;
`;

const ItemImg = styled.img`
  width: 100%;
`;

const Footer = styled.footer`
  width: 550px;
  display: flex;
  position: fixed;
  bottom: 0;
`;

const PayBtn = styled.button`
  width: 495px;
  color: white;
  background: black;
  font-size: 50px;
  border: none;
  cursor: pointer;
`;

const Pin = styled.div`
  background-color: lightgray;
  width: 55px;
  height: 65px;
`;


const Detail= () => {
    let [infoTab, setInfoTab] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal((prev) => !prev);
    };

    let { id } = useParams();
    const productsApi = new ProductsApi();
    const productsId = productsApi.getProductsById(id);


    return(
        <>
            <DetailHeader />
            <Modal showModal={showModal} setShowModal={setShowModal} productsId={productsId}/>

            <div>
                <ItemImg src={productsId.thumnailImage} />
                <ItemTitle>{productsId.title}</ItemTitle>
                <ItemPrice>{productsId.price}</ItemPrice>
            </div>
            <DetailTab setInfoTab={setInfoTab}/>
            <DetailInfo infoTab={infoTab} productsId={productsId}/>


            <GlobalStyles/>
            <Footer>
                <Pin>
                    <AiFillPushpin color='white' size='55' />
                </Pin>
                <PayBtn onClick={openModal}>구매하기</PayBtn>
            </Footer>
        </>
    );
};


export default Detail;