document.addEventListener("DOMContentLoaded",()=>{
    const app = document.getElementById("app");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    const divCard = document.createElement("div");
    const parrafo = document.createElement("p");


    divCard.id = "card";
    divCard.classList.add("principal card");
    
    parrafo.textContent = "Hola Soy un Parrafo";
    h1.textContent="Hello World";
    button.textContent = "Mostrar mensaje";
    
    divCard.appendChild(button);
    divCard.appendChild(parrafo);


    app.appendChild(h1);
    app.appendChild(divCard);

});