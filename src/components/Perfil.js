import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ImgProfile, ProfileContainer, ProfileLogout, ProfileMail, ProfileStyled, ProfileTitle } from '../styles/StyledComponents'
import NabVar from './Nabvar'


const Perfil = () => {

  let data = JSON.parse(localStorage.getItem('user'))

  const { name, email, img } = data

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/') 
    console.log('vamo');
  }
  
  return (
    <div>
      <ProfileContainer>
        <ProfileStyled>
          <ProfileTitle>Perfil</ProfileTitle>
          <Row>
            <Col mx={12} md={12}>
              <ImgProfile src={img} alt='' />
            </Col>
            <Col mx={12} md={12}>{name}</Col>
            <ProfileMail>{email}</ProfileMail>
            <ProfileLogout onClick={handleLogOut}>Cerrar sesión</ProfileLogout>
          </Row>
        </ProfileStyled>
      </ProfileContainer>
      <NabVar />

    </div>
  )
}

export default Perfil