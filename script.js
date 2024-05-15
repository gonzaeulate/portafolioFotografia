
// +++++++++++++++++++++++++++ 
// Open VALIDACION FORMULARIO DE CONTACTO

let formRegistro = document.querySelector(".contact_form")

let validarDatos = (event) => {
    event.preventDefault();

    let inputNombre = document.querySelector("#name");

    if (inputNombre.value === "") {
        let divError = document.querySelector("#errorNombre")
        divError.innerHTML = "El campo Nombre es obligatorio"
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