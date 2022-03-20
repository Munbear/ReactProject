import React from 'react'
import {HeaderWrap, Btn}from './HeaderStyle';
import Cancel from './xIcon.svg';


const Header = () => {
    return(
        <>
            <HeaderWrap>
                <Btn>
                    <img src={Cancel}/>
                </Btn>
            </HeaderWrap>
        </>
    )
}

export default Header;