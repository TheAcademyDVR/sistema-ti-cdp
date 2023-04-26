import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ValidationLogin from './loginValidation';
import axios from 'axios';
import './login.css'
import Swal from 'sweetalert2';

function Login() {
    const [values, setValues] = useState({
        email: '',
        clave: ''
    })

    const navigate = useNavigate();

    const [error, setError] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(ValidationLogin(values));
        if (error.email === "" && error.clave === "") {
        axios.post('http://localhost:8080/user/login', values)
            .then(res => {
                if (res.data.Status === "Existoso") {
                    let timerInterval
                    Swal.fire({
                        // title: 'Sweet!',
                        // text: 'Modal with a custom image.', 
                        html: '<b></b',
                        imageUrl: 'https://teampichincha.com/wp-content/uploads/2021/07/New-Logo-2.png',
                        imageWidth: 400,
                        imageHeight: 150,
                        imageAlt: 'Custom image',
                        position: 'center',
                        // icon: 'success',
                        // title: 'BIENVENIDO',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    navigate('/');
                } else {
                    // alert("Usuario o clave no existe");
                    // setError(res.data.Error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Haz ingresado mal tu email o clave ',
                        icon: 'error',
                        confirmButtonText: 'Intentar otra vez...'
                    })
                }
            })
            .catch(err => console.log(err));

        }
    }
    return (
        // <div className='d-flex justify-content-center align-items-center bg-primary vh-100 loginPage'>
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100 loginPage'>
            <div className='bg-white p-3 rounded w-25 loginForm'>

                <div className='mb-3'>
                    <img src='https://teampichincha.com/wp-content/uploads/2021/07/New-Logo-2.png' className='img-fluid p-3' />

                    <h><center>Iniciar Sesión</center></h>
                </div>

                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        {/* <label htmlFor='email'><strong>Correo electrónico</strong></label> */}
                        <input type='email' placeholder='Escribe tu correo electrónico' name='email'
                            onChange={handleInput} className='form-control rounded-2' />
                        {error.email && <span className='text-danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        {/* <label htmlFor='password'><strong>Clave</strong></label> */}
                        <input type='password' placeholder='Escribe tu clave' name='clave'
                            onChange={handleInput} className='form-control rounded-2' />
                        {error.clave && <span className='text-danger'>{error.clave}</span>}
                    </div>
                    <div className='mb-3'>
                        <button type='submit' className='btn btn-success w-100 rounded-1'>Inicio de sesión</button>
                        <p><center>Acepto los términos y condiciones</center></p>
                    </div>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-1 text-decoration-none'>Crear una cuenta nueva</Link>
                </form>
            </div>
        </div>
    )
}

export default Login