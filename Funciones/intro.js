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
console.log(compra(1000 , 2))

 //ejercicio 12

 function esMayordeEdad(numero){
    let resultadoNumero= numero
    if(resultadoNumero >= 18){
        console.log("Eres mayor de edad")
    }else{
        console.log("Eres menor de edad")
    }
    return resultadoNumero
 }
 console.log(esMayordeEdad(20))

 //ejercicio 13

 function ingresoAnual(ingreso , porcentaje){
    let impuesto= ingreso * porcentaje
    if(ingreso < 10000){
        console.log(`el impuesto a pagar es el 10% de su ingreso, ${impuesto}`)
    }
    else if(ingreso >= 10000 && ingreso <= 20000){
        console.log(`el impuesto a pagar es el 15% de su ingreso, ${impuesto}`)
    }
    else if(ingreso >= 2000){
        console.log(`el impuesto a pagar es el 20% de su ingreso, ${impuesto}`)
    }
    
    return impuesto
 }
 console.log(ingresoAnual(38000 , 0.20))

 //ejercicio 14

 function semana(numero){
    let dias= numero
    switch(dias){
        case 1:
            console.log("Es dia laboral")
                break
        case 2:
            console.log("Es dia laboral")
                break
        case 3:
            console.log("Es dia laboral")
                break
        case 4:
            console.log("Es dia laboral")
                break
        case 5:
            console.log("Es dia laboral")
                break
        case 6:
             console.log("Es fin de semana")
                break
        case 7:
            console.log("Es fin de semana")
                break
    }
    
 } 
 console.log(semana(7))