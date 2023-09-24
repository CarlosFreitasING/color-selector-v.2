//ELEMENT

const h1 = document.getElementById("tituloweb");
console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);

h1.textContent = "Nuevo texto desde js";
h1.style.backgroundColor = "red";
h1.style.color ="white";

//EVENTOS
//La interaccion con los usuarios se consigue con la captura de los eventos

//ADDEVENTLISTENER
//Registra un evento a un objeto en especifico
//puede ser un elemento, el mimso documento, una ventana, o un XMLHttpRrquest

//targer.addEventListener(tipo, listener);
//tipo: tipo de evento a escuchar
//listener: el objeto que recibe una notificacion cuando un evento
//de el tipo especificado ocurre. Debe ser un objeto implementado
//en la interfaz EventListener o una funcion js

const boton = document.querySelector(".btn-primary");
boton.addEventListener("click", () => {
    h1.textContent= "texto desde event listener"
    h1.style.color="blue";
    console.log("me diste click");
});