function validation(values) {

    let error = {}
    const email_pattern = /^[^\s@]+@[^¬s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.email === "") {
        error.email = "Debe de agregar un correo"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "El correo no encontrado"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Debe de agregar una clave"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "La clave no encontrado"
    } else {
        error.password = ""
    }
}