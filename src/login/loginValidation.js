function ValidationLogin(values) {

    let error = {}
    const email_pattern = /^[^\s@]+@[^¬s@]+\.[^\s@]+$/;
    const clave_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;

    if (values.email === "") {
        error.email = "Debe de agregar un correo"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "El correo no encontrado"
    } else {
        error.email = ""
    }

    if (values.clave === "") {
        error.clave = "Debe de agregar una clave"
    }
    else if (!clave_pattern.test(values.clave)) {
        error.clave = "La clave poco segura"
    } else {
        error.clave = ""
    }

    return error;
}

export default ValidationLogin