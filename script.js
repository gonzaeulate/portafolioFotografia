
// +++++++++++++++++++++++++++ 
// Open VALIDACION FORMULARIO DE CONTACTO
let formRegistro = document.querySelector(".contact_form");

function validarDatos(event) {
    event.preventDefault();

    let inputNombre = document.querySelector("#name");
    let inputLastName = document.querySelector("#lastName");
    let inputEmail = document.querySelector("#email");
    let inputPhone = document.querySelector("#phone");

    // Inicialmente, eliminar la clase de error de todos los campos
    let inputs = [inputNombre, inputLastName, inputEmail, inputPhone];
    inputs.forEach(input => {
        input.classList.remove("error");
        input.placeholder = input.defaultPlaceholder; // Restaurar placeholder original
    });

    let formValido = true;

    if (inputNombre.value === "") {
        inputNombre.placeholder = "Debe ingresar un nombre";
        inputNombre.classList.add("error");
        formValido = false;
    }
    if (inputLastName.value === "") {
        inputLastName.placeholder = "Debe ingresar un Apellido";
        inputLastName.classList.add("error");
        formValido = false;
    }
    if (inputEmail.value === "") {
        inputEmail.placeholder = "Debe ingresar un email";
        inputEmail.classList.add("error");
        formValido = false;
    }
    if (inputPhone.value === "") {
        inputPhone.placeholder = "Debe ingresar un numero de telefono";
        inputPhone.classList.add("error");
        formValido = false;
    }

    if (formValido) {
        formRegistro.submit();
    }
}

// Agregar eventos de entrada para eliminar la clase de error cuando el usuario empieza a escribir
document.querySelectorAll('.contact_form input').forEach(input => {
    input.addEventListener('input', function() {
        if (input.classList.contains('error')) {
            input.classList.remove('error');
            input.placeholder = input.defaultPlaceholder; // Restaurar placeholder original
        }
    });
});

formRegistro.addEventListener("submit", validarDatos);


// End VALIDACION FORMULARIO DE CONTACTO 
// +++++++++++++++++++++++++++ 