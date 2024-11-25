//implementae un modelo de producto con funciones constructoras y clases que permitan obtener informacion del producto, actualizar el stock,debiendo registrar,guardar o almacenar el nombre,precio y stock


export function Producto(nombre,precio,stock){
    let _nombre = nombre;
    let _precio = precio;
    let _stock = stock;

//-----setter y guetter----
    this.setNombre = function(nombre){
        _nombre = nombre;
    };
    this.setPrecio = function(Precio){
        _precio = Precio;
    };
    this.setStock = function(stock){
        _stock = stock;
    };

    this.getPrecio = function(){
        return _precio;
    };
    this.getNombre = function(){
        return _nombre;
    };
    this.getStock = function(){
        return _stock;
    };

    this.actualizarStock = function(cantidad){
        _stock +=cantidad;
        return `Stock actualizado a ${this.getStock()}`;
    }

    this.obtenerInfo = function(){
        return `Nombre : ${this.getNombre()} Precio : ${this.getPrecio()} Stock: ${this.getStock()}`;
    };
}