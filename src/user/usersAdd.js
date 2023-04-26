import React, { useState } from "react";


function UsersAdd() {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    clave: "",
    imagen: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="d-flex flex-column align-items-center pt-5 ">
      <h2>Agregar Usuario</h2>
      <form action="" onSubmit={handleSubmit} className="row g-3 w-50">
        <div className="col-12">
          <label htmlFor="nombre">
            <strong>Nombre</strong>
          </label>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            name="nombre"
            onChange={e=> setData({...data, nombre: e.target.value})}
            className="form-control "
          />
          {/* {errors.nombre && (
            <span className="text-danger">{errors.nombre}</span>
          )} */}
        </div>
        <div className="col-12">
          <label htmlFor="apellido">
            <strong>Apellidos</strong>
          </label>
          <input
            type="text"
            placeholder="Escribe tu Apellido"
            name="apellido"
            onChange={e=> setData({...data, apellido: e.target.value})}
            className="form-control"
          />
         
        </div>
        <div className="col-12">
          <label htmlFor="email">
            <strong>Correo electrónico</strong>
          </label>
          <input
            type="email"
            placeholder="Escribe tu correo electrónico"
            name="email"
            onChange={e=> setData({...data, email: e.target.value})}
            className="form-control "
          />
         
        </div>
        <div className="col-12">
          <label htmlFor="password">
            <strong>Clave</strong>
          </label>
          <input
            type="password"
            placeholder="Escribe tu clave"
            name="clave"
            onChange={e=> setData({...data, clave: e.target.value})}
            className="form-control rounded-2"
          />
        </div>
        <div className="col-12">
          <label htmlFor="imagen">
            <strong>Clave</strong>
          </label>
          <input
            type="file"
            placeholder="Selecciona una foto de perfil"
            name="imagen"
            onChange={e=> setData({...data, imagen: e.target.files[0]})}
            className="form-control rounded-2"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 rounded-1">
          Crear usuario
        </button>
      </form>
    </div>
  );
}

export default UsersAdd;
