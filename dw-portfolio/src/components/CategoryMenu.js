import Rect from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { CategoryMenuData } from '../Data/CategoryMenuData';

const MenuWrap =styled.div`
  display: flex;
  overflow: auto;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  flex: 0 0 auto;
  margin: 10px;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

const CategoryMenu = () => {
    return(
        <MenuWrap>
            {CategoryMenuData.map((obj, index)=>{
                return(
                    <MenuBox key={obj} className={obj.cName}>
                        <Link to={obj.path}>{obj.icon}</Link>
                    </MenuBox>
                )
            })}
        </MenuWrap>
    )
}

export default CategoryMenu;