class Producto {
    constructor(id, nombre, descripcion, precio, imagen, categoria, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.cantidad = 1;
    }
}
const productos = [
    (new Producto(1, "harina de Centeno", "Integral", 169, "/img/harina_centeno.jpg", "harina", this.cantidad)),
    (new Producto(2, "harina de Trigo blanca", "blanca/tipo 000", 114, "/img/trigo.jpg", "harina", this.cantidad)),
    (new Producto(3, "harina de Soja", "no OGM", 132, "/img/harina-de-soja.jpg", "harina", this.cantidad)),
    (new Producto(4, "Salvado", "Salvado grueso", 46, "/img/salvados.jpg", "harina", this.cantidad)),
    (new Producto(5, "Trigo", "", 62, "/img/granoTrigo.jpg", "grano", this.cantidad)),
    (new Producto(6, "Centeno", "", 92, "/img/centeno.jpg", "grano", this.cantidad)),
    (new Producto(7, "Lino", "", 171, "/img/lino.jpg", "grano", this.cantidad)),
    (new Producto(8, "Soja", "no OGM", 87, "/img/soja.jpg", "grano", this.cantidad))
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
        - Precio: ${producto?.precio} $ 
        - Cantidad de Productos: ${producto?.cantidad}
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

    let index = carrito.findIndex((element) => element?.nombre === nuevoProducto?.nombre);
    if (index !== -1) {
        let acumulador = 0;
        console.log(carrito[index]);
        carrito[index].cantidad++
        // me esta guardando la ultima suma y  me actualiza el valor de precio.

        carrito[index].precio += carrito[index].precio;
        mostraDatos();
    } else {
        carrito.push(nuevoProducto);
        console.log("agregaste un nuevo producto!")
        console.log(carrito);
        mostraDatos();
    }

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

function sweetAlert() {
    Swal.fire({
        title: 'Agregaste un producto a tu carrito',
        width: 600,
        icon: 'success',
        confirmButtonText: 'continuar',
        background: 'rgb(70, 69, 69)',
        color: '#e9ecef',
    })
}

function sweetAlert2() {
    Swal.fire({
        title: 'Gracias por tu compra',
        text: "vuelve pronto",
        width: 600,
        icon: 'info',

        background: 'rgb(70, 69, 69)',
        color: '#e9ecef',
    })
}
const irPagar = () => {
    sweetAlert2();
    const carritoMP = carrito.map((element) => ({
        title: element.nombre,
        description: "",
        picture_url: "",
        id: element.id,
        category: element.categoria,
        quantity: element.cantidad,
        currency_id: "ARS",
        unit_price: element.precio + (element.precio * 0.21)
    }));

    fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
            Authorization:
                "Bearer TEST-6749401201952774-052316-331a4b286472f40790ff1702e7a29e62-292785847",
        },
        body: JSON.stringify({
            items: carritoMP,
        }),
    })
        .then((resp) => resp.json())
        .then((data) => {
            window.open(data.init_point, "_blank");
        });
};
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
        sweetAlert();


    })
})


