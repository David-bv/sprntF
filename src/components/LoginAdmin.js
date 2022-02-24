import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ButtonGoogle, ButtonSigIn, DivLogin, ForgotPassword, FormLogin, ImgLogin, LoginInput, LoginTitle, LogoImg, NewAccount } from '../styles/LoginStyles'


const LoginAdmin = () => {

    const [usermail, setUsermail] = useState('')
    const [userpassword, setUsepassword] = useState('')

    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)   

    const handleValidation = () => {
        if (usermail === '' && userpassword === '') {
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Ningún dato ha sido ingresado</i>,
                icon: 'error',
                background: '#16161A' ,
                color: '#FFFFFE',
                width:'300px',
                padding:'25px',
                confirmButtonColor:'#7F5AF0',
                heightAuto: 'false',
            }) 
        } else {
            if (usermail === 'admin@daily-bits.com' && userpassword === 'admin') {
                navigate('/admin')
              }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <DivLogin>
            <LogoImg src='https://res.cloudinary.com/david-b/image/upload/v1645622268/sprint2/reto-final/dbtslogo_folqo1.svg'/>

            <LoginTitle>Administrador</LoginTitle>

            <ButtonGoogle>
                <ImgLogin src='https://res.cloudinary.com/david-b/image/upload/v1645631780/sprint2/reto-final/icons8-google_1_j7ig7e.svg'/>
                Continuar con Google
            </ButtonGoogle>
            <hr/>
            <FormLogin onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <LoginInput
                        type="email"
                        placeholder="Ingrese su correo electrónico"
                        value={usermail}
                        name='usermail'
                        onChange={(({ target }) => setUsermail(target.value))}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword" >
                    <Form.Label>Contraseña</Form.Label>
                    <LoginInput
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={userpassword}
                        name='userpassword'
                        onChange={(({ target }) => setUsepassword(target.value))}
                    />
                </Form.Group>
            </FormLogin>
            <ButtonSigIn variant="primary" onClick={handleValidation}>
                    Log in
            </ButtonSigIn>
            <ForgotPassword>¿Se te olvidó tu contraseña?</ForgotPassword>
            <Link to='/' style={{textDecoration: "none"}}>
                <NewAccount>Regresar</NewAccount>
            </Link>
        </DivLogin>
    )
}

export default LoginAdmin