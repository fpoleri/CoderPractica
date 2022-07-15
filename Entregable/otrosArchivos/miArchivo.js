let nombre = prompt("Ingresar nombre");
let apellido = prompt("Ingresar apellido");



while(nombre == "" || apellido == ""){
    alert("debes ingresar tu nombre y apellido");
    nombre = prompt("Ingresar nombre");
    apellido = prompt("Ingresar apellido");
}
    
    console.log("Hola" + " " + nombre + " " + apellido +" "+"ahora podes interctuar con nosotros");
    alert("Hola" + " " + nombre + " " + apellido +" "+ "ahora podes interctuar con nosotros");
    let edad = parseInt(prompt("Ingresa cuantos años tenes :"))
    
    if(edad>=18){    
        console.log("felicitaciones eres mayor de edad" );
        alert("felicitaciones eres mayor de edad");
        let anio = prompt("Ahora ingresa en que año estamos")
        let nacimiento = (anio-edad);
        
        alert ("muy buen naciste en" + " " + nacimiento )
    
    let repetir = parseInt(prompt("cuantas veces quiere ver su nombre repetido?"));
    let mostrar = [];
    for(i=0; i<=repetir;i++){
    mostrar[i]= nombre
    }
    console.log(mostrar);
    alert(mostrar);
}else{
        alert("No eres mayor edad, pero intentalo de nuevo ;)");
    }

    let harina = 500;
    let 