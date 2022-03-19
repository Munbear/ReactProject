import React from 'react'
import * as Style from '../styles/HeaderStyle';
import Cancel from '../icon/xIcon.svg';


const Header = () => {
    return(
        <>
            <Style.Header>
                <Style.Button>
                    <img src={Cancel}/>
                </Style.Button>
            </Style.Header>
        </>
    )
}

export default Header;