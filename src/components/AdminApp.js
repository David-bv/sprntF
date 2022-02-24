import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { url } from '../helpers/url';
import { AdminTable, AdminTitle, ButtonLogOut, DivAdmin } from '../styles/AdminStyles';
import { LogoImg } from '../styles/LoginStyles';

const AdminApp = () => {

    const [data, setData] = useState([])

    const navigate = useNavigate()

    const getData = () => {
        console.log(url);
        axios.get(url)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    const handleLogout = () => {
        navigate('/')
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <DivAdmin>
            
            <LogoImg src='https://res.cloudinary.com/david-b/image/upload/v1645622268/sprint2/reto-final/dbtslogo_folqo1.svg'/>

            <AdminTitle>Control de usuarios</AdminTitle>

            <div>
            <AdminTable striped bordered hover variant="dark" responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Usuario</th>
                        <th>Imagen</th>
                        <th>Preguntas Correctas</th>
                        <th>Preguntas Incorrectas</th>
                        <th>Total de preguntas</th>
                        <th>Horas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(users => (
                            <tr key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.email}</td>
                                <td>{users.name}</td>
                                <td><img src={users.img} alt='' width={"50px"} height={"70px"}/></td>
                                <td>{users.qok}</td>
                                <td>{users.qwrong}</td>
                                <td>{users.qtotal}</td>
                                <td>{users.hour}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </AdminTable>
            </div>

            <ButtonLogOut  onClick={handleLogout}>
                    Log Out
            </ButtonLogOut>

        </DivAdmin>


    )
}

export default AdminApp