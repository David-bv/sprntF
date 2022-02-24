import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../helpers/url'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ButtonNewUser, DivLogin, FormLogin, LogoImg, NewAccount } from '../styles/LoginStyles'

const SignIn = () => {

    const [loguser, setLoguser] = useState({

        id: '',
        name: '',
        email: '',
        password: '',
        qok: 0,
        qwrong: 0,
        qtotal: 0,
        hour: 0
    })

    const { name, email, password } = loguser

    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)


    const handleOnChange = ({ target }) => {
        setLoguser({
            ...loguser,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === '' || password === '' || name === '') {
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Por favor ingresar todos los campos</i>,
                icon: 'error',
                background: '#16161A',
                color: '#FFFFFE',
                width: '300px',
                padding: '25px',
                confirmButtonColor: '#7F5AF0',
                heightAuto: 'false',
            })
        } else {
            postData()
            navigate('/')
        }
    }

    const postData = () => {
        axios.post(url, loguser)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
            
        MySwal.fire({
            html: <i>Usuario Registrado</i>,
            icon: 'success',
            background: '#16161A' ,
            color: '#FFFFFE',
            width:'300px',
            padding:'25px',
            confirmButtonColor:'#7F5AF0',
            heightAuto: 'false',
        })
    }

    return (
        <DivLogin>
            <LogoImg src='https://res.cloudinary.com/david-b/image/upload/v1645622268/sprint2/reto-final/dbtslogo_folqo1.svg' />
            <FormLogin onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre"
                        value={name}
                        name='name'
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="ingrese su correo"
                        value={email}
                        name='email'
                        onChange={handleOnChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="ingrese su contraseña"
                        value={password}
                        name='password'
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <ButtonNewUser variant="primary" type='submit'>
                    Registrarse
                </ButtonNewUser>
            </FormLogin>


            <Link to='/' style={{ textDecoration: "none" }}><NewAccount>Regresar</NewAccount></Link>
        </DivLogin>
    )
}

export default SignIn