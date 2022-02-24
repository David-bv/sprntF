import { Col, Row } from "react-bootstrap"
import styled from "styled-components"
                      
export const DivHome = styled.div`
    background-color: #000000;
    height: 91vh;
`

export const TitleHome = styled.h4`
    text-align: center;
    padding-top: 2.5rem;
    padding-bottom: 2rem;
    color: #FFFFFE;
`

export const ImgHome = styled.img`
    width: 89.19px;
    height: 89.19px;
`
export const ImgHomeTwo = styled.img` 
    width: 83.19px;
    height: 83.19px;
`
export const DivBrands = styled(Col)`
    margin: 30px auto;
    width: 83.19px;
    height: 83.19px;
    @media only screen and (max-width: 600px) {
        margin: 1.5rem auto 0;
    }
`

export const DivBrandsTwoR = styled(Col)`
    width: 83.19px;
    height: 83.19px;
    margin-left: 50px;
    @media only screen and (max-width: 600px) {
        margin-left: 30px;
    }
`

export const DivBrandsTwoL = styled(Col)`
    width: 83.19px;
    height: 83.19px;
    margin-right: 50px;
    @media only screen and (max-width: 600px) {
        margin-right: 25px
    }
`

export const RowP = styled(Row)`
    margin: 8rem 0;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        margin: 4rem 0;
    }
`