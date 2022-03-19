import React from 'react';
import * as Style from '../styles/NavbarStyle'

const NavBar = () => {
    return(
        <>
            <Style.SubContainer>
                <Style.SelectionItem>
                    <span>~개의 렌더샷</span>
                </Style.SelectionItem>

                <Style.TitleItems>
                    <strong>갤러리</strong>
                </Style.TitleItems>

                <Style.BtnItems>
                    <button>다운</button>
                    <button>삭제</button>
                    <button>선택취소</button>
                </Style.BtnItems>
            </Style.SubContainer>
        </>
    )
}

export default NavBar;