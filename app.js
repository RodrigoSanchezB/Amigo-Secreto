// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);
    
    // Actualizar la lista en el HTML
    actualizarListaAmigos();
    
    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Limpiar la lista de amigos para mostrar solo el resultado
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    // Mostrar el resultado en el HTML con el mensaje adecuado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Su amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

