// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = []

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value.trim();
    
    if(listaDeAmigos.length <= 10) {
        if (nuevoAmigo === "" || nuevoAmigo.length < 3) {
            alert("Por favor, inserte un nombre (Debe tener 3 letras como mínimo).");
        }
        else {
            if (listaDeAmigos.includes(nuevoAmigo)) {
                alert(`El nombre ${nuevoAmigo} ya se encuentra en la lista.`);
            }
            else {
                listaDeAmigos.push(nuevoAmigo);
                document.querySelector("#amigo").value = "";
            }
        }
    }
    else {
        alert("La lista no puede tener más de 10 nombres.");
    }
    mostrarLista();
}

function mostrarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    
    for(let i = 0; i < listaDeAmigos.length; i++) {
        const elemento = listaDeAmigos[i];

        let listaHTML = document.createElement("li");
        listaHTML.textContent = elemento;
        lista.appendChild(listaHTML);
    }
}

function reiniciarSorteo() {
    listaDeAmigos = [];
    mostrarLista();

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    document.querySelector("#amigo").value = "";

    alert("Se reinicia el sorteo.");
}

function sortearAmigo() {
    if(listaDeAmigos.length >= 2) {
        let amigoSorteado = parseInt(Math.random() * listaDeAmigos.length);
        let resultado = document.querySelector("#resultado");

        let mostrarResultado = document.createElement("li");
        mostrarResultado.innerHTML = `El amigo sorteado es: ${listaDeAmigos[amigoSorteado]}`;

        resultado.appendChild(mostrarResultado);
    }
    else{
        alert("La lista tiene menos de 2 nombres, no se puede hacer el sorteo.");
    }
}
