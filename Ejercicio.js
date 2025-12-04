let x = 24;
let y = 12;
let suma = x+y;
let resta = x-y;
let mult = x*y;

while(true){

let operacion = prompt("Ingrese una operacion valida (Suma, Resta, Multiplicacion, Division): ");
if (operacion == "Salir"){
    alert("El programa ha finalizado");
    break;
}
function realizarOperacion(valor){
if (valor == "Suma"){
alert("El resultado es "+ suma);
} 
else if (valor == "Resta"){
alert("El resultado es "+ resta);
}
else if (valor == "Multiplicacion"){
alert("El resultado es "+ mult);
}
else if (valor == "Division"){
    if (y != 0){
    alert("El resultado es "+ x/y );
    }
    else{
        alert("La operacion no es valida")
    }
}
else if (valor != "Suma" && valor != "Resta" && valor != "Multiplicacion" && valor != "Division" && operacion != "Salir"){
    alert("La operacion no es valida")
}
}
realizarOperacion(operacion);
  let continuar = prompt("Desea continuar?");
if (continuar == "Si"){
    continuar == 1;
} else if (continuar == "No") {
     alert("El programa ha finalizado");
    break;
} 



}


//