//1.-Crear una clase para modelar un sistema de usuarios que puedan iniciar sesion , cerrarla y actualizar su perfil
//---------------Solucion con funciones constructoras----------------------

function Usuario(nombre,email,password){
  this.nombre = nombre; //variables de instacia publicas
  this.email=email;
  let _password=password; //variable de instacia privada
  //--------Metodos pubicos--------------
  this.login = function(email,password){ 
    if(this.email === email && _password === password){
      return `Bienvenido ${this.nombre}`;
    }
    return `Email o password incorrectos`;
  }; 

  this.updatemail = function(newemail){
    this.email = newemail;
    return `Has cambiado el email este es el nuevo ${this.email}`;
  };
}

//Crear nuevo usuario
const usuario1 = new Usuario('Juan','juan@gamil.com','123');

//Lo mostramos en el DOM
const app = document.getElementById("app");

function renderUsuario (){
  //funcion que pinta en el app el usuario
  app.innerHTML = `
  <h2>Usuario: ${usuario1.nombre}</h2>
  <p>Email : ${usuario1.email}</p>
  <button id='btnLogin'>Login</button>  
  `;

  //añadir el evento del boton
  const btnLogin = document.getElementById("btnLogin");
  btnLogin.addEventListener("onclick",()=>{
    alert(usuario1.login("juan@gmail.com" , "123"));
  });
}

//------------Solucion con clases---------------
class UsuarioClases {
  //Las variables privada se declaran #
  #password;
  constructor(nombre,email,password) {
    this.nombre = nombre;
    this.email=email;
    this.#password = password;
  }
  login(email,password){
    if(this.email === email && this.#password ===password){

    }
  }
}

const usuario2 = new UsuarioClases("pepe","pepe@gmail.com","123");
renderUsuario();