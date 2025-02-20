// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
//let amigoSecreto =


function agregarAmigo() {

    let nuevoAmigo = document.getElementById("amigo").value; //obtener el valor del input
    
    if (nuevoAmigo.trim() == "") { //.trim elimina espacios innecesarios y validamos con la condicion que el input no este vacio

        alert("Por favor Ingrese un nombre ");
        return
    }

    for (let indiceDelArray = 0; indiceDelArray < listaDeAmigos.length; indiceDelArray++) {

        if (listaDeAmigos[indiceDelArray] === nuevoAmigo) { // comparacion condicionar que indica que si en la lista de amigos se encuentra el nombre del nuevo amigo ingresado no lo guarde y lance un mensaje que ese nombre ya fue ingresado
            alert("Este nombre ya esta en la lista , Ingrese otro ");
            return; // sale de la funcion porque ese nombre ya existe
            
        }
        
    }

        listaDeAmigos.push(nuevoAmigo); //agregamos el nuevo amigo a la lista 
        console.log(listaDeAmigos);
       


        console.log(listaDeAmigos.length);
        document.getElementById("amigo").value = " "; //limpiamos el input 
        document.getElementById("amigo").focus(); //devolvemos el foco al input

    mostrarAmigos(); //llamada a la funcion mostrarAmigos para que aparezca la lista a medida que se agregan los nombres

}


function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); // obtenemos el elemento de la lista
    lista.innerHTML = "";  // Limpiar la lista antes de agregar nuevos elementos

    
    for (let indice = 0; indice < listaDeAmigos.length; indice++) { // Iterar sobre el array listaDeAmigos
        let itemDeLista = document.createElement("li"); // crear un nuevo <li> en cada iteración
        
        
        itemDeLista.textContent = listaDeAmigos[indice]; // Establecer el texto del <li> con el nombre del amigo

        lista.appendChild(itemDeLista);  // Agregar el <li> a la lista
    }
}


function sortearAmigo() {



    if (listaDeAmigos.length == 0) { // comprobar que el array no este vacio 
        alert ("No hay amigos para sortear"); //lanzamos un pop-up indicando que no hay datos para hacer un sorteo
        return; // salimos de la funcion
    }

    let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    let amigoSecreto =listaDeAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `amigo Secreto: ${amigoSecreto}`;

    
    
}




    


