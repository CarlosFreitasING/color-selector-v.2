console.log("conectado");

const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btnVisualizar");
const parrafoExa = document.querySelector("#parrafoExa");
const cardColor = document.querySelector("#cardColor");

console.log(inputColor);
console.log(btnVisualizar);
console.log(parrafoExa);
console.log(cardColor);

btnVisualizar.addEventListener("click", () =>{
    console.log(inputColor.value);
    parrafoExa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("Copied text to keyboard"))
        .catch((e)=> console.log(e));
});


// function onClick(){ una opcion es ponerle onclick al boton 
//     console.log("ME DISTE CLICK 2");
// };