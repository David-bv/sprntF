import { Form, Button, Col, ProgressBar, Alert, Container } from "react-bootstrap"
import styled from "styled-components"

export const ContainerForm = styled.div`
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;        
`

export const FormStyle = styled(Form)`
    border-radius: 10px;
    width: 38%;
    color: #FFFF;
    @media only screen and (max-width: 600px) {
        width: 93%;
        margin-top: 25px;
    }
`

export const QuestionCont = styled(Col)`
    /* display: inline-flex;
    width: 100%; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const HeaderForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 24px auto;
`

export const BarCont = styled(ProgressBar)`
    width: 50%;
    @media only screen and (max-width: 600px) {
        width: 40rem;
        margin:0 20px;
    }
`

export const LifeCount = styled.h5`
    text-align: center;
    font-size: 15px;
    position: relative;
    top: 4px;
    right: 36px;
    @media only screen and (max-width: 600px) {
        width: 20%;
        display: inline;
        padding-top: 6px;
        top: 0;
        right: 0;
    }
`

export const Title = styled.h2`
    text-align: center;
    display: inline-block;
    font-size: 22px;
    margin-right: 16px;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

export const RadioStyle = styled(Form.Check)`
    padding: 0 20px;
    font-size: 1.2rem;
    margin: 1rem auto;
    width: 85%;
    font-size: 16px;
`

export const ButtonStyle = styled(Button)`
    background-color: #6B47DC;
    height: 48px;
    color: FFFFFF;
    border: none;
    width: 95%;
    font-size: 1.1rem;
    margin:16px;
    &:hover{
        background-color: #D4CAF3;
    }
    &:focus{
        outline: none;
        background-color: #D4CAF3;
    }
    @media only screen and (max-width: 600px) {
        width: 91%;
    }
`
export const ButtonAlertCo = styled(Button)`
    background-color: #0F915B;
    height: 48px;
    color: FFFFFF;
    border: none;
    width: 95%;
    font-size: 1.1rem;
    margin:16px;
    border-radius: 16px;
    @media only screen and (max-width: 600px) {
        width: 91%;
    }
`
export const ButtonAlertWr = styled(Button)`
    background-color: #B81E3B;
    height: 48px;
    color: FFFFFF;
    border: none;
    width: 95%;
    font-size: 1.1rem;
    margin:16px;
    border-radius: 16px;
    @media only screen and (max-width: 600px) {
        width: 91%;
    }
`

export const ContainerStyled = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 80%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AlertQuiz = styled(Alert)`
    width: 97%;
    margin: 0 auto;
    font-size: 14px;
    position: relative;
    top: -70px;
`

export const AlertWrong = styled(Alert.Heading)`
    font-size: 20px;
    height: 15px;
`


export const ProfileStyled = styled(Container)`
    text-align: center;
`

export const ProfileContainer = styled.div`
    background-color: #000000;
    height: 91vh; 
    width: auto;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFE;
`

export const ProfileTitle = styled.h3`
    text-align: start;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #FFFFFE;
    padding-top: 16px;
    margin-left: 2rem;
    margin-bottom: 40px;
    @media only screen and (max-width: 600px) {
        margin-left: 16px;
    }
`
export const ProfileMail = styled.h5`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFE;    
`

export const ProfileLogout = styled.h3`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #EF4565;
    margin-top: 24px;
    cursor: pointer;
`

export const ImgProfile = styled.img`
    width: 80px;
    height: 80px;
`