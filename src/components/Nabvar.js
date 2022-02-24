import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavBarMain, TextNav, UlNav } from '../styles/NavBar'
import { FiHome } from "react-icons/fi";
import { BiStats } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

export default class NabVar extends Component {
  render() {
    return (
      <NavBarMain className="justify-content-center">
        <Nav.Item>
          <Nav.Link as={Link} to="/home">
            <UlNav>
              <li><FiHome className='icoHom'/></li>
              <li><TextNav>Home</TextNav></li>
            </UlNav>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/statistics">
          <UlNav>
              <li><BiStats className='icoHom'/></li>
              <li><TextNav>Estadísticas</TextNav></li>
            </UlNav>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/profile">
            <UlNav>
              <li><FiUser className='icoHom'/></li>
              <li><TextNav>Profile</TextNav></li>
            </UlNav>
          </Nav.Link>
        </Nav.Item>
      </NavBarMain>
    )
  }
}
