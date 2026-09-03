
// Buscamos el formulario y el lugar donde mostramos mensajes
const form = document.getElementById("register-form");
const formMessage = document.getElementById("form-message");

// Función básica: revisa que ninguna casilla esté vacía

function validarCamposVacios() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    if (nombre === "" || apellido === "" || fechaNacimiento === "" || email === "" || telefono === "") {
        return false;
    }

    return true;
}

// Función básica: revisa que el correo y el teléfono tengan el formato correcto
function validarFormato(){

    const correo = document.getElementById("email").value
    const numero = document.getElementById("telefono").value
    const partesCorreo = correo.split("@")
    const partesNumero = numero.split("+")

    if (correo.includes("@") && partesCorreo[1].includes(".")){
        if (numero.trim().length == 12 && partesNumero[0] == ""){
            return true
        } 
    }
    return false
}

//Funcion basica, mensaje de descuento si el e mail es @duocuc.cl
function mensajeDescuento() {
    const correo = document.getElementById("email").value;
    if (correo.endsWith("@duocuc.cl")) {
        return true;
    }
}

// Evento submit del formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); // evitamos que la página se recargue

    if (validarCamposVacios() === false) {
        formMessage.textContent = "Debe rellenar todas las casillas";
        return;
    }
    else if (mensajeDescuento() === true) {
        formMessage.textContent = "¡Felicidades! Tienes un descuento especial por ser parte de Duoc UC.";
        return;
    }
    else if (validarFormato() === false) {
        formMessage.textContent = "El correo o el teléfono no tienen el formato correcto";
        return;
    }   

    // mensaje de éxito si todo está correcto
    formMessage.textContent = "Registro exitoso. ¡Bienvenido a Level-Up Gamer!";
});
