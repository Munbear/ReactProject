import React from 'react'
import * as HeaderStyle from '../styles/HeaderStyle';
import Cancel from '../icon/xIcon.svg';


const Header = () => {
    return(
        <>
            <HeaderStyle.Header>
                <HeaderStyle.Button>
                    <img src={Cancel}/>
                </HeaderStyle.Button>
            </HeaderStyle.Header>
        </>
    )
}

export default Header;