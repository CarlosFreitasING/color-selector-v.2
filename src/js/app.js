console.log("CONECTADO");
console.log(document);
console.log(document.head);
console.log(document.title);
 

//GETELEMENTBYID
//Devuelve una referencia al elemento por su ID
console.log(document.getElementById("tituloweb"));
console.log(document.getElementById("tituloweb").textContent);//texto del h1
console.log(document.getElementById("tituloweb").innerHTML);//texto del h1. Permite insertar codigo html pero no es tan recomendable porque podrian hacer inyecciones.


//DOMContentLoaded.
//Permite cargar primero todo el documento html y LUEGO ejecutar lo que esta dentro de la funcion flecha
// console.log("DOMCONTENTLOADED");
// document.addEventListener("DOMContentLoaded", () => {
//     console.log(document.getElementById("tituloweb"));
//     console.log(document.getElementById("tituloweb").textContent);//texto del h1
//     console.log(document.getElementById("tituloweb").innerHTML);//texto del h1. Permite insertar codigo html pero no es tan recomendable porque podrian hacer inyecciones.
// });

//QUERYSELECTOR
//Devuelve el primer elemento del documento que coincida con el grupo especidicado de selectores
console.log("QUERYSELECTOR");
console.log(document.querySelector("#tituloweb")); //los id con #
console.log(document.querySelector(".text-primary")); //las clases con .
//console.log(document.querySelector("h1")); //o el elemento

console.log(document.querySelector(".text-danger")); 
//solo agarra el primer elemento que coincide con la clase

//QUERYSELECTORALL
console.log(document.querySelectorAll(".text-danger")); 
//agarra los todos los elementos text-danger

console.log(document.querySelectorAll(".container .text-danger")); 
//selecciono solo los de dentro del container



