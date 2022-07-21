class Producto {
    constructor(id,nombre,descripcion,precio){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
}
}

const carrito = [];


function agregarCarrito (nuevoProducto){

    carrito.push(nuevoProducto);
    console.log("agregaste un nuevo producto!")
    console.log(carrito);
 
}

function borrarDelCarrito(idProducto){
    //const id = prompt("escriba el id del producto que quiere borrar")
    const index = carrito.findIndex((producto)=> producto.id === idProducto );
    carrito.splice(index,1);
    console.log(carrito);
}


    const producto1 = agregarCarrito(new Producto(1,"harina de Trigo","Integral",97));
    agregarCarrito(new Producto(2,"harina de Centeno","Integral",169));
    agregarCarrito(new Producto(3,"harina de Trigo blanca","blanca/tipo 000",114));
    agregarCarrito(new Producto(4,"harina de Soja","no OGM",132));
    agregarCarrito(new Producto(5,"Salvado entero","Salvado grueso",46));
    agregarCarrito(new Producto(6,"Salvado","Salvado Fino",52));

let acumulador = "";


for ( i=0; i<carrito.length; i++){
    acumulador += "<div>"+ carrito[i].nombre+" "+"<p><button onclick='agregarCarrito(new Producto)'>Agregar</button></p></div>";
}
console.log(acumulador);

document.write(acumulador + "<p><button onclick='borrarDelCarrito(1)'>borrar</button></p>");
