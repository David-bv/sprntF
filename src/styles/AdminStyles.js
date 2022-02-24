import { Button, Table } from "react-bootstrap";
import styled from "styled-components";

export const DivAdmin = styled.div`
    background-color: #16161A;
    height: 100vh;
    width: 100vw;
    padding-bottom: 1px;
    @media only screen and (max-width: 1400px) {
        height: auto;
    }
`

export const AdminTitle = styled.h3`
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 39px;
    color: #FFFFFE;
    margin: 25px 0;
`
export const AdminTable = styled(Table)`
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 15px;
    color: #FFFFFE;
    margin: 35px auto 40px;
    width: 95%;
`

export const ButtonLogOut = styled(Button)`
    background-color: #873dec;
    display: block;
    height: 35px;
    color: FFFFFF;
    border: none;
    width: 20%;
    font-size: 1rem;
    margin:35px auto;
    &:hover{
        background-color: #A786DF;
    }
    &:focus{
        outline: none;
        background-color: #A786DF;
    }
    @media only screen and (max-width: 600px) {
        width: 40%;
    }
`