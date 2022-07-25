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
function ingresarProduto(){
   return new Producto( parseInt(prompt("ingrese el id")),
    prompt("ingrese el nombre del producto"),
    prompt("ingrese la descripion"),
    prompt("ingrese el precio"))
}


agregarCarrito(new Producto(1,"harina de Centeno","Integral",169));
agregarCarrito(new Producto(2,"harina de Trigo blanca","blanca/tipo 000",114));
agregarCarrito(new Producto(3,"harina de Soja","no OGM",132));
agregarCarrito(new Producto(4,"Salvado entero","Salvado grueso",46));
agregarCarrito(new Producto(5,"Salvado","Salvado Fino",52));
let respuesta = prompt("Queres agregar un nuevo producto(si/no)?")

while(respuesta === "si"){
    agregarCarrito((ingresarProduto()));
    respuesta = prompt("Queres agregar otro producto(si/no)?")
}

let acumulador = "";
for ( i=0; i<carrito.length; i++){
    acumulador += carrito[i].nombre+ "||||| ";
}
console.log("Sus productos son: "+acumulador);

//document.write(acumulador + "<p><button onclick='borrarDelCarrito(1)'>borrar</button></p>");
