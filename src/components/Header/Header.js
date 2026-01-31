import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderSec = styled.header`
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  list-style: none;
`;

export const NavLinkSt = styled(NavLink)`
  font-size: 15px;
  position: relative;

  &.active::after {
    background-color: red;
    border-radius: 10px;
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: -15px;
    left: 0;
  }
`;