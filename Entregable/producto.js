class producto {
    constructor(id,nombre,descripcion,precio){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
}
}
let producto1 = new producto(001,"harinaTrigo", "blanca/tipo 000", 250);
let producto2 = new producto(002,"harinaTrigo", "Integral", 250);
let producto3 = new producto(003,"harinaCenteno", "Mezcla", 290);

const totalProducto = [producto1,producto2,producto3]; 

function agregarProducto (nuevoProducto){
if (totalProducto.find((producto)=> producto.id === nuevoProducto.id || producto.nombre === nuevoProducto.nombre)){
    console.log("el producto con id: "+ nuevoProducto.id + " y nombre: " + nuevoProducto.nombre + " ya existe")
}else{
    totalProducto.push(nuevoProducto);
 }
}


function borraProducto(idProducto){
    const index = totalProducto.findIndex((producto)=> producto.id === idProducto );
    totalProducto.splice(index,1);
    console.log(index);
}

agregarProducto(new producto(004,"harinaMaiz","molida fina",330));
agregarProducto(new producto(005,"harinaArroz","molida fina",300));
agregarProducto(new producto(001,"harinaTrigo","blanca/tipo 000",250));



for (i=0;i<totalProducto.length; i++){
console.log(totalProducto[i]);
//alert(totalProducto[i]);

}