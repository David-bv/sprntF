import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../helpers/url'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ButtonGoogle, ButtonSigIn, DivLogin, ForgotPassword, FormLogin, ImgLogin, LoginInput, LoginTitle, LogoImg, NewAccount, SpanLogin } from '../styles/LoginStyles'


const Login = () => {

    const [usermail, setUsermail] = useState('')
    const [userpassword, setUsepassword] = useState('')
    const [user, setUser] = useState('')

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
            let login = user.find(data => data.email === usermail)

            if (login.email === usermail && login.password === userpassword) {
                console.log('inicio');
                navigate('/home')
                localStorage.setItem('user', JSON.stringify(login))
            } else {
                MySwal.fire({
                    title: <strong>Error</strong>,
                    html: <i>Datos incorrectos, por favor verifique sus credenciales o regístrese.</i>,
                    icon: 'error',
                    background: '#16161A' ,
                    color: '#FFFFFE',
                    width:'300px',
                    padding:'25px',
                    confirmButtonColor:'#7F5AF0',
                    heightAuto: 'false',
                })
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const getData = () => {
        console.log(url);
        axios.get(url)
            .then(response => {
                console.log(response.data);
                setUser(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log(usermail, userpassword);
    }, [usermail, userpassword])

    console.log(user);

    return (
        <DivLogin>
            <LogoImg src='https://res.cloudinary.com/david-b/image/upload/v1645622268/sprint2/reto-final/dbtslogo_folqo1.svg'/>

            <LoginTitle>Iniciar sesión</LoginTitle>

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
            <Link to='/sigin' style={{textDecoration: "none"}}>
                <NewAccount>¿Aún no tienes una cuenta? <SpanLogin>Inscribirse</SpanLogin></NewAccount>
            </Link>
            <Link to='/login-admin' style={{textDecoration: "none"}}>
                <NewAccount>Portal Empresarial <SpanLogin>Ingresa Acá</SpanLogin></NewAccount>
            </Link>
        </DivLogin>
    )
}

export default Login