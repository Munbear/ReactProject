import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  
`;

const Main = () => {
    return(
        <>
            <MainContainer>
                <div>개의 렌더샷</div>
                <div>갤러리</div>
                <div>
                    <span>
                        <button>다운</button>
                    </span>
                    <span>
                        <button>삭제</button>
                    </span>
                    <span>
                        <button>선택취소</button>
                    </span>
                </div>
            </MainContainer>
        </>
    )
}

export default Main;