import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ValidationSignup from './signupValidation';
import axios from 'axios'
import './signup.css'
function Signup() {

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        clave: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(ValidationSignup(values));
        if (errors.nombre === "" && errors.apellido === "" && errors.email === "" && errors.clave === "") {
            axios.post('http://localhost:8080/user/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));

        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 signupPage'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='nombre'><strong>Nombre</strong></label>
                        <input type='text' placeholder='Escribe tu nombre' name='nombre'
                            onChange={handleInput} className='form-control rounded-2' />
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='apellido'><strong>Apellidos</strong></label>
                        <input type='text' placeholder='Escribe tu Apellido' name='apellido'
                            onChange={handleInput} className='form-control rounded-2' />
                        {errors.apellido && <span className='text-danger'>{errors.apellido}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Correo electrónico</strong></label>
                        <input type='email' placeholder='Escribe tu correo electrónico' name='email'
                            onChange={handleInput} className='form-control rounded-2' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Clave</strong></label>
                        <input type='password' placeholder='Escribe tu clave' name='clave'
                            onChange={handleInput} className='form-control rounded-2' />
                        {errors.clave && <span className='text-danger'>{errors.clave}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-1'>Crear cuenta</button>
                    <p><center>Acepto los términos y condiciones</center></p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-1 text-decoration-none'>Tengo una cuenta</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup