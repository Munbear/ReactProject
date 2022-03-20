import React from 'react'
import styled from 'styled-components'
import Gallery from "./Gallery/Gallery";
import NavBar from "./NavBar/NavBar";

const MainContainer = styled.div`
  padding: 0px 32px 32px;
  overflow: hidden scroll;
  height: calc(100vh - 48px);
`;

const Content = () => {
    return(
        <>
            <MainContainer>
                <NavBar/>
                <Gallery />
            </MainContainer>
        </>
    )
}

export default Content;