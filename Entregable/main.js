class Producto {
    constructor(id, nombre, descripcion, precio, imagen, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
    }
}
let productos = [
    (new Producto(1, "harina de Centeno", "Integral", 169, "/img/harina_centeno.jpg", "harina")),
    (new Producto(2, "harina de Trigo blanca", "blanca/tipo 000", 114, "/img/trigo.jpg", "harina")),
    (new Producto(3, "harina de Soja", "no OGM", 132, "/img/harina-de-soja.jpg", "harina")),
    (new Producto(4, "Salvado", "Salvado grueso", 46, "/img/salvados.jpg", "harina")),
    (new Producto(5, "Trigo", "", 62, "/img/granoTrigo.jpg", "grano")),
    (new Producto(6, "Centeno", "", 92, "/img/centeno.jpg", "grano")),
    (new Producto(7, "Lino", "", 171, "/img/lino.jpg", "grano")),
    (new Producto(8, "Soja", "no OGM", 87, "/img/soja.jpg", "grano"))
];
const carrito = JSON.parse(localStorage.getItem('totalCarrito')) ?? [];
let Total = carrito.reduce((acumulador, producto) => acumulador + producto?.precio, 0);
let sumaCarrito = JSON.parse(localStorage.getItem('sumaTotal')) ?? [];

document.getElementById("carro").innerHTML = carrito.length;
document.getElementById("carroTotal").innerHTML = "$ " + sumaCarrito;

function generarCardCarrito() {
    document.getElementById("card-body").innerHTML = " ";
    carrito.forEach((producto) => {
        const idButton = `card-body${producto?.id}`;
        document.getElementById("card-body").innerHTML += `
    <div> 
    <p id=${producto?.id}>
        -${producto?.id}
        -${producto?.nombre}
        -${producto?.descripcion}
        -${producto?.precio} $
        <button id=${idButton} onclick="borrarDelCarrito(${producto?.id})" > eliminar </button>     
   </p>
</div>`

    })
}

function mostraDatos() {
    localStorage.setItem('totalCarrito', JSON.stringify(carrito))
    let Total = carrito.reduce((acumulador, producto) => acumulador + producto?.precio, 0);
    localStorage.setItem('sumaTotal', JSON.stringify(Total))
    let elmentoCarrito = JSON.parse(localStorage.getItem('totalCarrito')) ?? [];
    let sumaCarrito = JSON.parse(localStorage.getItem('sumaTotal')) ?? [];

    document.getElementById("carro").innerHTML = elmentoCarrito.length;
    document.getElementById("carroTotal").innerHTML = "$ " + sumaCarrito;
    document.getElementById("muestraTotalCarro").innerHTML = "Total: " + "$" + sumaCarrito;

}

function agregarCarrito(nuevoProducto) {
    carrito.push(nuevoProducto);
    console.log("agregaste un nuevo producto!")
    console.log(carrito);
    mostraDatos();

}

function borrarDelCarrito(idProducto) {
    const index = carrito.findIndex((producto) => producto?.id === idProducto);
    carrito.splice(index, 1);
    console.log(carrito);
    eliminarPorducto(idProducto);
    console.log("eliminaste un producto!")
    mostraDatos();

}
function eliminarPorducto(id) {
    const nodoAborrar = document.getElementById(id);
    let nodoPadre = nodoAborrar.parentNode;
    nodoPadre.removeChild(nodoAborrar);
}

for (const nodoHTML of document.getElementsByClassName("filtro-categoria")) {
    nodoHTML.onclick = (event) => {
        const filtro = event.target.getAttribute("data-categoria");
        console.log(filtro);
        filtrarProductos(filtro);
        
    }
 
}
function filtrarProductos(tipoCategoria) {
    document.getElementById("secction-card").innerHTML = " ";
    const productosFiltrados = productos.filter((producto) => producto.categoria === tipoCategoria);

    productosFiltrados.forEach((producto) => {
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
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    <div class="text-center">
    <a class="btn btn-outline-dark mt-auto" id="${idButton}">Agregar al carrito</a>
    </div>
    </div>
    </div>`
    })



}

productos.forEach((producto) => {
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

productos.forEach((producto) => {
    const idButton = `add-carrito${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        agregarCarrito(producto);
    })
})

