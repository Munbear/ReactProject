import React from 'react';
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

const NavTabContents = (props) => {
    const { item } = props
    if (item.navTab === 0){
        return(
            <div>
                <img src={item.thumnailImage}/>
            </div>
        )
    } else if (item.navTab === 1 ) {
        return (
            <h1>asldfjalsdf</h1>
        )
    } else if (item.navTab === 2) {
        return (
            <h1>this is smosdf </h1>
        )
    }
}

export default NavTabContents;