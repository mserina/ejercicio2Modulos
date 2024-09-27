let clientes = [];

export function crearClientes(cliente){
    clientes.push(cliente);
    return "Cliente creado exitosamente";
}

export function actualizarCliente(cliente){
    //Encuentra la posicion del cliente a actualizar
    indice = clientes.indexOf(cliente.DNI);
    //Y metemos los datos actualizados del cliente en dicha posicion
    cliente[indice] = cliente;
}

export function eliminarCliente(dni){
    indice = cliente.indexOf(dni);
    clientes.splice(indice);
}

export function leerCliente(dni){
    return clientes.find(cliente => cliente.dni = dni);
}

export function todoLosClientes(){
    return clientes;
}