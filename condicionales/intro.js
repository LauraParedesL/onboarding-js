console.log("hola mundo")

let num1=4
let num2=5
if(num1 > num2){
    console.log(num1)
}else{
    console.log(num2)
}

if(num1 > num2){
    console.log(num1)
}
else if (num1 < num2) {
    console.log(num2)
}
else if(num1 == num2){
    console.log("los numeros son iguales")
}

if(num1 == num2){
    console.log("los numeros son iguales")
}else{
    console.log("los numeros son diferentes")
}

let fecha1="2018-10-7"
let fecha2="2018-2-17"

if (fecha1 < fecha2) {
    console.log(`la fecha ${fecha2} es mayor que ${fecha1}`)
}else{
    console.log("las fechas son iguales")
}


if(fecha1 > fecha2){
    console.log(`la fecha ${fecha1} es mayor que ${fecha2}`)
}

else if(fecha1 < fecha2){
    console.log(`la fecha ${fecha1} es menor que ${fecha2}`)
}

else if(fecha1 == fecha2){
    console.log(`la fecha ${fecha1} es igual a la fecha ${fecha2}`)
}

let dato1=5
let dato2=7
let dato3=9

if (dato1 < dato3 && dato2 < dato3) {
    console.log(`el numero ${dato3} es el mayor`)
}

let color=prompt("ingresa un color")

switch (color) {
    case "rojo":
      alert("El color de la pasion");
      break;
    case "azul":
        alert("El color del mar");
        break;
    case "verde":
            alert("El color de la naturaleza");
            break;
}

let valor1=prompt("ingresa un numero del 1 al 100")
let valor2=prompt("ingresa otro numero del 1 al 100")
let operacion=prompt("ingresa una operacion")

switch(operacion){
    case "suma":
        let suma = Number(valor1) + Number(valor2)
        alert(suma)
        break;
    case "resta":
            let resta = Number(valor1) - Number(valor2)
            alert(resta)
            break;
    case "multiplicacion":
            let multiplicacion = Number(valor1) * Number(valor2)
            alert(multiplicacion)
            break;
    case "division":
            let division = Number(valor1) / Number(valor2)
            alert(division)
            break;
}

let persona1={
    nombre:"rosa",
    edad:35,
    estatura:1.54
}

let persona2={
    nombre:"eric",
    edad:18,
    estatura:1.81
}

if (persona1.edad > persona2.edad){  
    console.log(`${persona1.nombre} tiene menos altura y es mayor que ${persona2.nombre}`)
}else if(persona1.estatura < persona2.estatura){
}

let tuNombre=prompt("Ingresa tu nombre")
let tuEdad=prompt("ingresa tu edad")
let tuAltura=prompt("ingresa tu altura")
let tuVision=prompt("ingresa tu vision (debe ser menor a 10)")
let candrive = false
if(tuEdad >= 18){
    candrive = true
} else {
    candrive = false
}

if(tuAltura > 150){
}

if(tuVision > 8){
    candrive = true
}else{
    candrive=false
}

if (candrive) {
    console.log("estas capacitado para conducir")
} else {
    console.log("no estas capacitado para conducir")
}

let laEdad=prompt("ingresa tu edad")

if(laEdad >0  && laEdad< 12){
    alert("eres un infante")
}

if(laEdad > 13 && laEdad < 18){
    alert("eres un adolescente")
}

if(laEdad > 19 && laEdad < 45){
    alert("eres un mayor joven")
}

if(laEdad > 45 && laEdad < 99){
    alert("eres un anciano")
}

if(laEdad > 100){
    alert("¿en realidad tiene esa edad?")
}


let number1=prompt("ingresa un numero del 1 al 3")
if(number1 >=1 && number1 <=3){
}else{
    alert("otro:Ese valor no esta permitido")
}

let number2=prompt("ingresa el numero que desees")
     
    if(number1 == 1){
     alert(`el numero ingresado es ${( number1 * number2)}`)
    }

    if(number1 == 2){
        alert(`el doble del numero ingresado es ${(number1 * number2)}`)
    }

    if(number1 == 3){
        alert(`el doble del numero ingresado es ${(number1 * number2)}`)
    }

let miNombre=prompt("Nombre del cliente")
let pase=prompt("tipo de pase")


if(miNombre === "laura" || pase === "vip"){
    alert("Bienvenida a nuestro parque")
}else{
    let entrada=prompt("¿tiene entrada?")
   if(entrada == "si"){
        let entrada2=prompt("desea utilizarla?")
        if(entrada2 == "si"){
            alert("bienvenida a nuestro parque")
        }else{
            alert("esperamos verte pronto, hasta luego")
        }
   }else {
    let deseaComprar=prompt("¿Desea comprar?")
    if(deseaComprar == "si"){
        let comprar=prompt("¡Cuanto dinero tienes disponible?")
        if(comprar > 1000 ){
             alert("venta exitosa, Bienvenida a neustro parque")
        }else{
            alert("rechazo de venta")
        }
   } else {
    alert("esperamos verte pronto, hasta luego")
   }
}
}





let numeroIncognita=8
let numeroIngresado=prompt("Ingrese el numero que desee")

if(numeroIncognita < numeroIngresado){
    alert("Mayor: el numero ingresado es mayor, vuelve a intentarlo")

    let intento1=prompt("Intenta de nuevo")
        if(numeroIncognita > intento1){
        alert("Menor: el numero ingresado es menor, vuelve a intentarlo")
    }
    let intento2=prompt("intenta de nuevo")
        if(numeroIncognita == intento2){
            alert("Ganaste has adivinado el numero")
        }
}

let jugador1=prompt("Jugador1: Ingrese su eleccion")
let jugador2=prompt("Jugador2: Ingrese su eleccion")


if(jugador1 == "piedra"  && jugador2 == "tijera"){
    alert("El jugador 1 ha ganado")
}
if(jugador1 == "tijera" && jugador2 == "piedra"){
    alert("El jugador 2 ha ganado")
}


    

