import React from 'react'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center'>
        <h3>Lista de usuarios</h3>
      </div>
      <Link to='/create' className='btn btn-success'>Agregar usuario</Link>
    </div>
  )
}

export default Users