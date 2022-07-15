alert("Bienvendio al Almacen Online")
let harina = parseInt(prompt("harina 150$ por kg, seleccione la cantidad en kg: "));
let huevos = parseInt(prompt("huevos 450$ por maple, seleccione la cantidad: "))
let aceite = parseInt(prompt("aceite girasol 150$ por lt, seleccione la cantidad: "))
let total = (harina*150)+(huevos*450)+(aceite*150);

let formaPago= prompt("como abonas? efectivo o tarjeta: ");
alert(elegirModoPago(formaPago));

while(!formaPago){
    formaPago= prompt("como abonas? efectivo o tarjeta: ");
    alert(elegirModoPago(formaPago));
}
function  elegirModoPago(modoPago){

switch(modoPago){
    case "efectivo": 
    return "tu total en efectivo con el 10% descuento es: " + efectivo(total,21,10)
    break;
    case "tarjeta": 
    return "tu total en un pago con tarjeta tiene un 15% de recargo: " + tarjeta(total,21,15);
    break;
    default: 
    return "no ingresaste modo de pago";
    break;
}
}


function efectivo(monto,IVA, descEfectivo)
{
    let montoIva= monto+(monto*(IVA/100))
    return (montoIva)-(montoIva*(descEfectivo/100))
}
function tarjeta (monto,IVA, recargo){
    let montoIva= monto+(monto*(IVA/100))
    return (montoIva)+(montoIva*(recargo/100))
}