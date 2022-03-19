import styled from 'styled-components'

export const Header = styled.div`
  position: relative;
  width: 100vw;
  min-width: 1024px;
  padding: 8px;
  height: 48px;
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(235, 235, 235, 0.8);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 44px;
  height: 32px;
  background: rgba(238, 238, 238, 0.8);
  border: none;
  vertical-align: middle;
  cursor: pointer;
  
  img {
    width: 14px;
    height: 14px;
  }
`;

