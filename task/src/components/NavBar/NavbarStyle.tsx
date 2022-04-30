import styled from "styled-components";

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  padding: 0px 12px;
`;

export const SelectionItem = styled.div`
  flex: 1 1 0%;
`;

export const Selection = styled.span`
  padding-left: 10px;
  
  span{
    padding-right: 8px;
    padding-left: 8px;
  }
`;

export const TitleItems =styled.div`
  flex: 1 1 0%;
  text-align: center;
  
  strong{
    font-size: 20px;
  }
`;

export const BtnItems = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-end;
  
  button{
    background-color: #fff;
    border: 1px solid transparent;
    width: 30px;
    margin-left: 0px;
    margin-right: 8px;
    cursor: pointer;
  }
`