

//------------------------Inicio de la aplicación-------------------------------

document.addEventListener("DOMContentLoaded",()=>{

//1.Selecciona el h1 por id
const elementh1 = document.getElementById("contenedorPrincipal").querySelector("h1").textContent;
const elementh1v2 = document.getElementById("contenedorPrincipal").querySelector("h1");
console.log(elementh1,elementh1v2);

//2.Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorSecundario`.
const elementp = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(elementp);

//3.Selecciona el elemento `img` por su atributo `src`.
const image = document.querySelector("img[src='imagen.png']");
console.log(image);

//4.Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
const elementsSpan = document.querySelectorAll("#contenedorSecundario span");
console.log(elementsSpan);

//5.Selecciona el primer párrafo con la clase "importante".
const elementpimportant = document.querySelector(".importante");
console.log(elementpimportant);

//6.Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
const elementallp = document.querySelectorAll("#contenedorPrincipal p");
console.log(elementallp);

//7.Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
const elemntsatributo = document.querySelectorAll("[data-atributo='valor1']");
console.log(elemntsatributo);

//8.Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
const segundop = document.querySelectorAll(".parrafo.importante");
segundop.length >=1?console.log(segundop[1]):null;

//9.Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
const spancontenedor = document.querySelectorAll(".contenedor span");
console.log(spancontenedor);

//10.Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
const tercerparrafo = document.querySelectorAll("#contenedorPrincipal .parrafo");
tercerparrafo.length>2?console.log(tercerparrafo[2]):console.log("no hay un 3er parrafo");

});