import React from 'react'
import { Col } from 'react-bootstrap'
import { ContBox, ContStat, DivStat, TitleStats, TitleSubStats } from '../styles/Stats'
import NabVar from './Nabvar'

const Estadisticas = () => {

  let data = JSON.parse(localStorage.getItem('user'))

  const {hour, qok, qtotal, qwrong} = data

  return (
    <div>
      <ContStat>

        <TitleStats>Estadisticas</TitleStats>

        <TitleSubStats>Los últimos 7 días</TitleSubStats>

        <DivStat>
          <ContBox>
            <Col xs={10} md={6}>Tiempo de estudio (horas)</Col>
            <Col xs={2} md={4}><span style={{ color: '#FFFFFE' }}>{hour.toFixed(4)}</span></Col>
          </ContBox>
          <ContBox>
            <Col xs={10} md={6}> Respuestas contestadas</Col>
            <Col xs={2} md={4}><span style={{ color: '#FFFFFE' }}>{qtotal}</span></Col>
          </ContBox>
          <ContBox>
            <Col xs={10} md={6}> Respuestas correctas</Col>
            <Col xs={2} md={4}><span style={{ color: '#2CB67D' }}>{qok}</span></Col>
          </ContBox>
          <ContBox>
            <Col xs={10} md={6}> Respuestas incorrectas</Col>
            <Col xs={2} md={4}><span style={{ color: '#EF4565' }}>{qwrong}</span></Col>
          </ContBox>
        </DivStat>
      </ContStat>
      <NabVar />
    </div>
  )
}

export default Estadisticas