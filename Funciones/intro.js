//ejercicio1
function suma(){
    console.log(100 * 20)
}

//ejercicio 2
suma()

//ejercicio 3
//function operacion(numero1 , numero2){
   // console.log(`tengo ${numero1} y mido ${numero2}`)
//}

//operacion(24 , 161)

//ejercicio 4
let numeroA= 100
let numeroB= 20

function suma2(numeroA , numeroB){
    let resultado= numeroA * numeroB
    return resultado
}
    console.log(suma2(numeroA , numeroB))

//ejercicio 6

let multiplicacion = function (numeroA , numeroB){
    let resultado= numeroA * numeroB
    return resultado
}
    console.log(multiplicacion(numeroA , numeroB))
//ejercicio 7

let multiplicacion2 = (numeroA , numeroB) =>  {return numeroA * numeroB;}
console.log(multiplicacion(numeroA , numeroB ))

//ejercicio 8

function saludar (nombre){
    console.log(`Hola mi nombre es ${nombre}`)
}

saludar("Laura")

//ejercicio 9

let anonima=(parametro1 , parametro2) =>{
    let multiplicarParametros= parametro1 * parametro2
    return multiplicarParametros
}
    console.log(anonima (2 , 3))
    console.log(anonima (5 , 5))

//ejercicio 10

function area(base , altura){
    let resultadoArea= base * altura
    return resultadoArea
}
    console.log(area(2 , 2))

function perimetro(lado1 , lado2 , lado3){
    let resultadoPerimetro= lado1 + lado2 + lado3
    return resultadoPerimetro
}
    console.log(perimetro(3 , 3, 3))

//ejercicio 11

let compra=(precio , cantidad) => {
    let resultadoCompra= precio * cantidad; 
    if(resultadoCompra >=10){
        console.log(`el total es ${resultadoCompra} con 10% de descuento`)
    }
    if(resultadoCompra >=20){
        console.log(`el total es ${resultadoCompra} con 20% de descuento`)
    }
    return resultadoCompra
}
