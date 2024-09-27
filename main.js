import { crearClientes } from "./clientManager.js";

let clientesArrray = [];

function nuevoCliente(){
    event.preventDefault();
    const clienteNuevo = {
        nombre: document.querySelector('#nombre').value,
        dn: document.querySelector('#dni').value,
        movil: document.querySelector('#movil').value,
        direccion: document.querySelector('#direccion').value
    };
    let mensaje = crearClientes(clienteNuevo)
    document.querySelector('#mensaje').innerHTML = mensaje;
    //Para reinicar el formulario, nota: esta funcion se encarga de aplciar acciones (por ejemplo resetear un formualario)
    //El [0], se refiere al primer formulario, de haber un segundo formulario, seria el [1]
    document.forms[0].reset;
}

//permite usar la funcion nuevoCliente de forma global
window.nuevoCliente = nuevoCliente;

/**
     * Para acceder a un dato del formulario
     * console.log(document.forms[0].nombre.value);
     */
    