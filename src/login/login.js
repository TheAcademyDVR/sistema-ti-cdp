import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './loginValidation'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <div className='mb-3'>
                    <h2><center>Iniciar Sesión</center></h2>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Correo electrónico</strong></label>
                        <input type='email' placeholder='Escribe tu correo electrónico' name='email'
                            onChange={handleInput} className='form-control rounded-2' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Clave</strong></label>
                        <input type='password' placeholder='Escribe tu clave' name='password'
                            onChange={handleInput} className='form-control rounded-2' />
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