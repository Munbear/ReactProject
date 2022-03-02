import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const ItemWrap = styled.div`
  width: 50%;
  display: inline-block;
`;

const ItemImg = styled.div`
  padding: 8px;
  
  img {
    width: 100%;
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

const TagName = styled.p`
  font-size: small;
  color: lightslategray;
  
`;

const ImgBlock = styled.div`
  padding: 10px;
  
  img {
    width: 30%;
  }
`;



const NavTabContents = (props) => {
    let navigate = useNavigate();
    const { items } = props;

    if (props.navTab === 0) {
        return(
            <ItemWrap onClick={ () => { navigate('/detail/' + items.id)}}
            >
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
            <ListWrap>
                <InfoList>
                    <p>{props.mallData.rank}</p>
                    <h2>{props.mallData.title}</h2>
                    <TagName>선호도 2위</TagName>
                </InfoList>

                <ImgBlock>
                    <img src={props.mallData.thumnailImage} />
                </ImgBlock>
            </ListWrap>
        );
    } else if (props.navTab === 2) {
        return (
            <ListWrap>
                <InfoList>
                    <p>{props.brandData.rank}</p>
                    <h2>{props.brandData.title}</h2>
                    <TagName>선호도 1위</TagName>
                </InfoList>

                <ImgBlock>
                    <img src={props.brandData.thumnailImage} />
                </ImgBlock>
            </ListWrap>
        );
    };
};

export default NavTabContents;