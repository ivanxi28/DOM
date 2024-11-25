
//---------Decalaracion de variables ----------



//---------Declaracion de funciones-------------
const handlerClickSpan =(e)=>{
        const span = e.target;
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        span.style.backgroundColor=`#${randomColor}`;

};


const hanlerClickParrafo = (e) =>{
    const parrafo = e.target;
    alert(parrafo.textContent);

}
//ejercicio 5
const handlerClickEtiqueta = (e)=>{
    const etiqueta = e.target;
    etiqueta.remove();
}

//Ejercicio 6
const handlerMouseSpan = (e) =>{
    const span = e.target;
    span.style.backgroundColor = "blue";
}

//---------Inicio del programa------------------
document.addEventListener("DOMContentLoaded",()=>{
document.querySelectorAll("#contenedorSecundario span")
    .forEach(span =>{
        span.addEventListener("click",handlerClickSpan);
    });

//Ejercicio 2 Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.

document.querySelectorAll(".parrafo")
    .forEach(parrafo=>{
        parrafo.addEventListener("dblclick",hanlerClickParrafo);
        
    });

//Ejercicio 4 Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").

document.addEventListener("keydown",(event)=>{
    if(event.key === 'Enter'){
        document.querySelectorAll("#contenedorSecundario p")
            .forEach(parrafo=>{
                parrafo.textContent="Mis huevos";
            });
    }
});

//Ejercicio 5 Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.

document.querySelectorAll(".etiqueta")
    .forEach(etiqueta=>{
        etiqueta.addEventListener("click",handlerClickEtiqueta);
    })

//Ejercicio 6 Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.

document.querySelectorAll("#contenedorSecundario span")
    .forEach(span=>{
        span.addEventListener("mouseover",()=>{
            span.style.color=  "blue";
        });
        span.addEventListener("mouseout",()=>{
            span.style.color = "black";
            span.style.color = "";
        })
    })

//Ejercicio 8 Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.

document.querySelector("#contenedorPrincipal img")
    .addEventListener("click",()=>{ 
        document.querySelectorAll("#contenedorPrincipal p")
            .forEach(parrafos =>{
                const currentSize = window.getComputedStyle(parrafos).fontSize;
                console.log("currentsize---->" ,typeof currentSize);
                parrafos.style.fontSize = `${parseInt(currentSize) * 2}px`;
            });
    });

//Ejercicio 9 Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.

document.addEventListener("keydown",(event)=>{
    alert(`Has presionado la tecla: ${event.key} (Código: ${event.code})`);
});

//Ejercicio 10 Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.

const contenedorPrincipal = document.getElementById("contenedorPrincipal");
    contenedorPrincipal.addEventListener("click",()=>{
        contenedorPrincipal.style.backgroundColor = "green";
    })

});