import { Button, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";


export const DivLogin = styled.div`
    background-color: #16161A;
    height: 100vh;
`

export const LogoImg = styled.img`
    display: block;
    margin: 0 auto;
    padding: 32px 0 37px;
`

export const LoginTitle = styled.h3`
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFE;
`

export const ImgLogin = styled.img`
    padding-right: 8px;
    padding-bottom: 3.5px;
`

export const ButtonGoogle = styled(Button)`
    background-color: #EF4565;
    display: block;
    height: 48px;
    color: FFFFFF;
    border: none;
    width: 36.5%;
    max-width: 450px;
    font-size: 1.1rem;
    margin:16px auto;
    &:hover{
        background-color: #ea6981;
    }
    &:focus{
        outline: none;
        background-color: #ea6981;
    }
    @media only screen and (max-width: 620px) {
        width: 91%;
    }
`

export const FormLogin = styled(Form)`
    height: auto;
    width: 40%;
    max-width: 480px;
    padding: 16px;
    margin:16px auto;
    color: #72757E;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFE;
    @media only screen and (max-width: 600px) {
        width: 95%;
    }
`

export const ButtonSigIn = styled(Button)`
    background-color: #873dec;
    display: block;
    height: 48px;
    color: #FFFFFF;
    border: none;
    width: 36.5%;
    max-width: 450px;
    font-size: 1.1rem;
    margin:16px auto;
    &:hover{
        background-color: #A786DF;
    }
    &:focus{
        outline: none;
        background-color: #A786DF;
    }
    @media only screen and (max-width: 600px) {
        width: 91%;
    }
`

export const LoginInput = styled(FormControl)`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #72757E;
`

export const ForgotPassword = styled.h5`
    text-align: center;
    font-family: 'Inter', sans-serif;
    color: #2CB67D;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #2CB67D;
`

export const NewAccount = styled.h5`
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFE;
`

export const SpanLogin = styled.span`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #2CB67D;
`



export const ButtonNewUser = styled(Button)`
    background-color: #873dec;
    display: block;
    height: 48px;
    color: FFFFFF;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    margin:16px auto;
    &:hover{
        background-color: #A786DF;
    }
    &:focus{
        outline: none;
        background-color: #A786DF;
    }
`