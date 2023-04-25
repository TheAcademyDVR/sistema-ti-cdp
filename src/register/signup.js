import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor='nombre'><strong>Nombre</strong></label>
                    <input type='text' placeholder='Escribe tu nombre' className='form-control rounded-2'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='nombre'><strong>Apellidos</strong></label>
                    <input type='text' placeholder='Escribe tu Apellido' className='form-control rounded-2'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Correo electrónico</strong></label>
                    <input type='email' placeholder='Escribe tu correo electrónico' className='form-control rounded-2'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Clave</strong></label>
                    <input type='password' placeholder='Escribe tu clave'  className='form-control rounded-2'/>
                </div>
                <button className='btn btn-success w-100 rounded-1'>Crear cuenta</button>
                <p><center>Acepto los términos y condiciones</center></p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-1 text-decoration-none'>Tengo una cuenta</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup