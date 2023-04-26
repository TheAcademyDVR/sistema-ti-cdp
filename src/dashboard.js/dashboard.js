import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'


function Dashboard() {
    return (
        <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Panel Admin</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <Link to="/" class="nav-link align-middle px-0 text-white">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Usuarios</span> </Link>
                       
                    </li>
                    <li>
                        <Link to="/profile" class="nav-link px-0 align-middle text-white">
                            <i class="fs-4 bi-person"></i> <span class="ms-1 d-none d-sm-inline">Perfil</span></Link>
                    </li>
                   
                    <li>
                        <Link href="#" class="nav-link px-0 align-middle text-white">
                            <i class="fs-4 bi-power"></i> <span class="ms-1 d-none d-sm-inline">Cerrar Sesión</span> </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col p-0 m-0">
            <div className='p-1 d-flex justify-content-center shadow'>
                <h4>Concentración Deportiva Pichincha</h4>
            </div>
            <Outlet/>
        </div>
    </div>
</div>
    )
}

export default Dashboard