import styled from "styled-components";

export  const TitleStats = styled.h5`
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #FFFFFE;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-bottom: 3rem;
    @media only screen and (max-width: 600px) {
        padding-top: 2rem;
        padding-left: 16px;
    }
`

export  const TitleSubStats = styled.h5`
    font-family: 'Nunito', sans-serif;
    font-family: Nunito;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.005em;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFE;
    padding-left: 2rem;
    @media only screen and (max-width: 600px) {
        padding-top: 16px;
        padding-left: 16px;
    }
`


export const ContStat = styled.div`
    background-color: #000000;
    height: 91vh;
    width: auto;
`

export const DivStat = styled.div`
    margin-top: 16px;
    line-height: 30px;
    color: #FFFFFE;
    padding-left: 16px;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: center;
    @media only screen and (max-width: 600px) {
        margin-top: 16px;
    }
`

export const ContBox = styled.div`
    border: 1px solid #94A1B2;
    border-radius: 8px;
    height: 56px;
    display: inline-flex;
    width: 60%;
    align-items: center;
    margin: 16px 0;
    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`