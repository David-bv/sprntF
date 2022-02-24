import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DivBrands, DivBrandsTwoL, DivBrandsTwoR, DivHome, ImgHome, ImgHomeTwo, RowP, TitleHome } from '../styles/StyledHome'
import NabVar from './Nabvar'

export class Home extends Component {
  render() {
    return (
      <div>
        <DivHome>
        <TitleHome>Practica tus conocimientos en la categoría que prefieras.</TitleHome>
        <Container>
          <Row>
            <DivBrands xs={12} md={12} >
              <Link to="/question/html"><ImgHome src='https://res.cloudinary.com/david-b/image/upload/v1645367113/sprint2/reto-final/html_qlce8p.svg' alt='' /></Link>
            </DivBrands>
          </Row>
          <RowP>
            <DivBrandsTwoL xs={6} md={6} >
              <Link to="/question/css"><ImgHomeTwo src='https://res.cloudinary.com/david-b/image/upload/v1645367113/sprint2/reto-final/css_ee3nbl.svg' alt='' /></Link>
            </DivBrandsTwoL>
            <DivBrandsTwoR xs={6} md={6} >
              <Link to="/question/js"><ImgHomeTwo src='https://res.cloudinary.com/david-b/image/upload/v1645367112/sprint2/reto-final/js_p2xh5v.svg' alt='' /></Link>
            </DivBrandsTwoR>
          </RowP>
          <RowP>
            <DivBrandsTwoL xs={6} md={6} >
              <Link to="/question/figma"><ImgHomeTwo src='https://res.cloudinary.com/david-b/image/upload/v1645367113/sprint2/reto-final/figma_mbdzsk.svg' alt='' /></Link>
            </DivBrandsTwoL>
            <DivBrandsTwoR xs={6} md={6} >
              <Link to="/question/ux"><ImgHomeTwo src='https://res.cloudinary.com/david-b/image/upload/v1645367112/sprint2/reto-final/ux_qlaezf.svg' alt='' /></Link>
            </DivBrandsTwoR>
          </RowP>
        </Container>
      </DivHome>
      <NabVar/>
      </div>
      
    )
  }
}

export default Home