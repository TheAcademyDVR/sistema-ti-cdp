const { Swal } = require("sweetalert2");

Swal.fire({
    title: 'Error!',
    text: 'Haz ingresado mal tu email o clave ',
    icon: 'error',
    confirmButtonText: 'Intentar otra vez...'
})