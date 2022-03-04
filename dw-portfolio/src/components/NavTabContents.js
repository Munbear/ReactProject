import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const ItemWrap = styled.div`
  width: 50%;
  display: inline-block;
`;

const ItemImg = styled.div`
  padding-left: 8px;
  width: 259px;
  height: 310px;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 6%;
    box-shadow: 2px 1px 7px 0px;
  }
`;

const InfoWrap = styled.div`
  display: -moz-box;
  position: relative;
  left: 12px;
  
  p {
    margin: 0;
  }
`;

const ItemPrice = styled.p`
  font-weight: bold;
`;

const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: solid 1px;
`;

const InfoList = styled.div`
  padding: 10px;
  
  p {
    margin: 0;
  }
`;


const ImgBlock = styled.div`
  width: 20%;
  height: 77px;
  
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;



const NavTabContents = (props) => {
    let navigate = useNavigate();
    const { items } = props;
    console.log(items);

    if (props.navTab === 0) {
        return(
            <ItemWrap onClick={ () => { navigate('/detail/' + items.id)}}>
                <ItemImg>
                    <img src={items.thumnailImage}/>
                </ItemImg>
                <InfoWrap>
                    <p>{items.title}</p>
                    <ItemPrice>{items.price}</ItemPrice>
                </InfoWrap>
            </ItemWrap>
        );
    } else if ( props.navTab === 1) {
        return (
            <ListWrap onClick={ () => { navigate('/mall/' + props.mallData.id)}}>
                <InfoList>
                    <p>{props.mallData.rank}</p>
                    <h2>{props.mallData.title}</h2>
                </InfoList>

                <ImgBlock>
                    <img src={props.mallData.thumnailImage} />
                </ImgBlock>
            </ListWrap>
        );
    } else if (props.navTab === 2) {
        return (
            <ListWrap onClick={ () => { navigate('/brand/' + props.brandData.id)}}>
                <InfoList>
                    <p>{props.brandData.rank}</p>
                    <h2>{props.brandData.title}</h2>
                </InfoList>

                <ImgBlock>
                    <img src={props.brandData.thumnailImage} />
                </ImgBlock>
            </ListWrap>
        );
    };
};

export default NavTabContents;