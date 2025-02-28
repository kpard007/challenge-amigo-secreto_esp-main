// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//Parte #1
let amigos = [];


function agregarAmigo(){

    let nombreAmigo = document.getElementById('amigo').value;
    //Usamos la funcion trim para eliminar los espacios en blanco al final de la caja de texto
    if (nombreAmigo.trim() == ''){
        alert("Por favor, ingrese un nombre válido");
    }
    else {
    //Ingresamos el nombre al array 
        amigos.push(nombreAmigo);
    //Limpiamos la caja para que quede disponible e introducir el siguiente nombre
        limpiarCaja();
        console.log(amigos);
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

//Parte #2



