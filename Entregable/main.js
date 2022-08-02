class Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const carrito = [];
function agregarCarrito(nuevoProducto) {
    carrito.push(nuevoProducto);
    console.log("agregaste un nuevo producto!")
    console.log(carrito);
}
function borrarDelCarrito(idProducto) {
    //const id = prompt("escriba el id del producto que quiere borrar")
    const index = carrito.findIndex((producto) => producto.id === idProducto);
    carrito.splice(index, 1);
    console.log(carrito);
}


let harinas = [
(new Producto(1, "harina de Centeno", "Integral", 169 , "/img/harina_centeno.jpg")),
(new Producto(2, "harina de Trigo blanca", "blanca/tipo 000", 114, "/img/trigo.jpg")),
(new Producto(3, "harina de Soja", "no OGM", 132, "/img/harina-de-soja.jpg")),
(new Producto(4, "Salvado", "Salvado grueso", 46, "/img/salvados.jpg" ))
];

harinas.forEach((producto) => {
    const idButton = `add-carrito${producto.id}`
    document.getElementById("secction-card").innerHTML += ` <div class="col mb-5">
    <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="${producto.imagen}"size= "400x300" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
    <!-- Product name-->
        <h5 class="fw-bolder">${producto.nombre}</h5>
    <!-- Product price-->
        <p>Precio por 5kg</p>
         ${"$" + producto.precio}
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" id="${idButton}">Agregar al carrito</a>
        </div>
    </div>
</div>`
})
harinas.forEach((producto) => {
    const idButton = `add-carrito${producto.id}`
    document.getElementById(idButton).addEventListener('click', ()=> {
        agregarCarrito(producto);
        alert(`agregaste ${producto.nombre} al carrito`);
        
    })
});

let granos = [
(new Producto(10, "Trigo", "", 62 , "/img/granoTrigo.jpg")),
(new Producto(11, "Centeno", "", 92, "/img/centeno.jpg")),
(new Producto(12, "Lino", "", 171, "/img/lino.jpg")),
(new Producto(13, "Soja", "no OGM", 87, "/img/soja.jpg" ))
];




granos.forEach((producto) => {
    const idButton = `add-carrito${producto.id}`
    document.getElementById("secction-granos").innerHTML += `<div class="col mb-5">
    <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="${producto.imagen}"size= "400x300" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
    <!-- Product name-->
        <h5 class="fw-bolder">${producto.nombre}</h5>
    <!-- Product price-->
        <p>Precio por 5kg</p>
         ${"$" + producto.precio}
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" id="${idButton}">Agregar al carrito</a>
        </div>
    </div>
</div>`
});
granos.forEach((producto) => {
    
    const idButton = `add-carrito${producto.id}`
    document.getElementById(idButton).addEventListener('click', ()=> {
        agregarCarrito(producto);
    })
});
// ---Mostrar en el carrito web el numero de productos, no funciona--
let contador;
for (i=0; carrito.length>i; i++){
    contador++
    document.getElementById("carro").innerHTML +=`<span id="carro" 
    class="badge bg-dark text-white ms-1 rounded-pill">0</span> ${contador}`
    
console.log(contador)
}



