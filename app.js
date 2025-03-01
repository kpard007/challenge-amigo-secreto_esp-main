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

    //mostramos la lista en el html luego de añadir los nombres
        mostrarLista();
        console.log(amigos);
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

//Parte #2

function mostrarLista(){
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = "";

    for(let i = 0; i <= amigos.length-1; i++){

        //crea el elemento html li en memoria (aun no es visible)
        let li = document.createElement('li');
        //le asigna al elemento creado el nombre de la lista de amigos basado en la posicion del array
        li.textContent = amigos[i];

        //agrega el elemento li dentro del elemento ul que ya esta en el html
        lista.appendChild(li);
    }

}

//parte #3
function sortearAmigo(){
    let indiceRandom;
    if (amigos.length === 0){
        alert('No hay nombres a sortear');
    //retornamos al no haber nombres en el arreglo para abortar la ejecucion
        return; 
    }
    //asignamos el valor de un indice aleatorio a la variable indiceRandom
    indiceRandom = Math.floor(Math.random()*amigos.length);
    let nombreSorteado = amigos[indiceRandom];

    //almacenamos el resultado en el html
    let resultado = document.getElementById('resultado');

    //mostramos el resultado en el html 
    resultado.innerHTML = (`<li> ${nombreSorteado} </li>`);
    
}

