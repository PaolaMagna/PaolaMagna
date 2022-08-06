"use strict";
function saludar(nombre, mensajeAdicional) {
    console.log("Hola ".concat(nombre));
    if (mensajeAdicional) {
        console.log(mensajeAdicional);
    }
}
saludar('Juan', 'cuidate');
saludar('Jorge');
