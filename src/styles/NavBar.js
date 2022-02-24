import { Navbar, NavLink } from "react-bootstrap";
import styled from "styled-components";

export const NavBarMain = styled(Navbar)`
    background-color:#232E35;
    padding-bottom: 16px;
`
export const UlNav = styled.ul`
    list-style: none;
    display: table-row;
    align-items: center;
    justify-content: center;
    background-color: #232E35 ;
    color: white;
    &:hover {
        color: #2CB67D;
    }
    &:focus{
        color: #2CB67D;
    }
`

export const TextNav = styled.span`
    text-align: center;
    font-size: 12px;
`


export const LinkNav = styled(NavLink)`
    background-color: red;
`