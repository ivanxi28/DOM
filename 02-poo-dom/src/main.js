import { Producto } from "./components/Producto.js";
import { ProductoClase } from "./components/ProductoClase.js";

//------------Array de Productos---------------
const productos = [
    new Producto("almohada",200,50),
    new ProductoClase("Ramon",1,50)
];

//--------Renderizar los productos---------
const app = document.getElementById("app");
app.innerHTML = `
    <h3>Gestion de productos </h3>
    ${productos.map((producto,index) =>{
        return `
        <li>${producto.obtenerInfo()}</li>
        <button class='btnactualizar' data-index = '${index}'>Actualizar Stock </button>
        `;
    })
.join("")}
`;
//escuchamos el eventos del click

document.querySelectorAll(".btnactualizar")
    .forEach((btn)=>{
        btn.addEventListener("click",()=>{
            alert("As pulsado");
        });
    });