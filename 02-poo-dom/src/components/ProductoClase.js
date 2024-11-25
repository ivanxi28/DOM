export class ProductoClase{
    #nombre;
    #precio;
    #stock;
    constructor(nombre,precio,stock){
        this.#nombre=nombre;
        this.#precio=precio;
        this.#stock=stock;
    }

    //-----getter y setter-------
    setNombre(nombre){
        this.#nombre = nombre;
    };
    getNombre(){
        return this.#nombre;
    };
    setStock(stock){
        this.#stock = stock;
    };
    getStock(){
        return this.#stock;
    };
    setPrecio(precio){
        this.#precio = precio;
    };
    getPrecio(){
        return this.#precio;
    };

    actualizar(cantidad){
        this.#stock += cantidad;
        return `Stock actualizado a >${this.getStock()}`;
    };

    obtenerInfo(){
        return `Nombre : ${this.getNombre()} Precio : ${this.getPrecio()} Stock: ${this.getStock()}`;
    };
}