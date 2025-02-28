// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){

    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo.trim() == ''){
        alert("Por favor, ingrese un nombre válido");
    }
    else {
        amigos.push(nombreAmigo);
        limpiarCaja();
        console.log(amigos);
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}



