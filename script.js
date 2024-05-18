
// +++++++++++++++++++++++++++ 
// Open VALIDACION FORMULARIO DE CONTACTO

let formRegistro = document.querySelector(".contact_form")

function validarDatos(event) {
    event.preventDefault();

    let inputNombre = document.querySelector("#name");
    let inputLastName = document.querySelector("#lastName")
    let inputEmail = document.querySelector("#email")
    let inputPhone = document.querySelector("#phone")

    if (inputNombre.value === "") {
        inputNombre.placeholder = "Debe ingresar un nombre";
        inputNombre.classList.add("error");
    } else if (inputLastName.value === "") {
        inputLastName.placeholder = "Debe ingresar un Apellido";
        inputLastName.classList.add("error");
    } else if (inputEmail.value === "") {
        inputEmail.placeholder = "Debe ingresar un email";
        inputEmail.classList.add("error");
    } else if (inputPhone.value === "") {
        inputPhone.placeholder = "Debe ingresar un numero de telefono";
        inputPhone.classList.add("error");
    } else {
            formRegistro.submit();
    }
}

formRegistro.addEventListener("submit", validarDatos)


/*
document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(event) {
        let inputNombre = document.getElementById("name");

        if (inputNombre.value === "") {
            inputNombre.placeholder = "Debe ingresar un nombre";
            inputNombre.classList.add("error");
            event.preventDefault();
        } else {
            inputNombre.classList.remove("error");
        }
    });
}); 
*/

// End VALIDACION FORMULARIO DE CONTACTO 
// +++++++++++++++++++++++++++ 