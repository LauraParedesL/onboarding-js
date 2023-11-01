//ejercicio 1

let numero=prompt("Ingresa un numero del 1 al 100")

for(let contador= numero; contador > 0; contador--){
    console.log(contador)
}

//ejercicio 2

let digito=prompt("Ingresa un numero del 1 al 10")

for(multiplicador= 1 ; multiplicador <= 10 ; multiplicador++){
    console.log(`${multiplicador} * ${digito} = ${multiplicador*digito}`)
}


//ejercicio 3

let sumandoNumero1=[]
let numero1= Number(prompt("Ingrese un numero"))
sumandoNumero1.push(numero1)

while(numero1 > 0){
    numero1 = Number(prompt("Ingrese un numero o 0 para finalizar"))
    sumandoNumero1.push(numero1)
}

let suma = sumandoNumero1.reduce((total, num) => {
    return total + num
})

console.log(suma)

//ejercicio 4

let sumandoNumero2 = []
let numero2 = Number(prompt("Ingrese un numero"))
sumandoNumero2.push(numero2)

do {
 numero2 = Number(prompt("Ingrese un numero o 0 para finalizar"))
 sumandoNumero2.push(numero2)
} while (numero2 > 0)

let suma2 = sumandoNumero2.reduce((total, num) => {
    return total + num
})
 console.log(suma2)

 

 //ejercicio 5
 let numerosIngresados = []
 let adivinando= Number(prompt("Ingresa un numero al azar"))
 let intentos=1

 while(adivinando != suma){
    intentos++
    if(adivinando < suma){
        console.log("El numero ingresado es menor que el secreto")
        adivinando= Number(prompt("Ingresa otro numero"))
    }
    else if(adivinando > suma){
        console.log("El numero ingresado es mayor que el secreto")
        adivinando= Number(prompt("Ingresa otro numero"))
    }
    if(adivinando == suma){
        console.log(`Acertaste el numero secreto era ${suma}, realizaste ${intentos} intentos`)
    }
}

//ejercicio 6

let numeroIngresado= Number(prompt("Ingrese un numero"))
let resultadoNumeroIngresado=null

for(let i=1; i <= numeroIngresado; i++){
    if(numeroIngresado % i == 0){
        resultadoNumeroIngresado= numeroIngresado / i
        console.log(resultadoNumeroIngresado)
    }
}

//ejercicio 7

function sonarCampana(){
    console.log("Ding Dong");
    return "Ding Dong" 
}

let sonido = " "

for(let dd= 0; dd < 5; dd++){
    sonido= sonido + sonarCampana()
}
console.log(sonido)

//ejercicio 8

const fechaLimite= "1997-8-3".split("-")
const fechas= ["1984-18-2", "1998-3-2","1973-15-7","2024-21-10", "2001-1-9"]
let mayor = []
console.log(fechaLimite)
fechas.forEach((elm) => {
    const element = elm.split("-")
    if (element[0] >= fechaLimite[0]) {
        mayor.push(elm)
    }
}
);
console.log(mayor)

//ejercicio 9

let colores=["amarillo", "azul", "rojo", "verde", "naranja", "rosa","violeta","marron"]

for(let value of colores){
    
    console.log(value)
}

//ejercicio 10

function coloresArray(){
    for(let value of colores){
    
        console.log(value)
}
}
coloresArray()

//ejercicio 11

let numerosEx11=[5,7,10,13,17]

for(let dobles of numerosEx11){
        dobles += dobles;
        console.log(`El numero es ${dobles} y su doble es ${dobles*2}`)
}

//ejercicio 12

padre={
    nombre: "Abdullah",
    apellido: "Haikal",
    edad:37,
    integrante:"padre"
}

madre={
    nombre: "shoshana",
    apellido: "Habibi",
    edad:"24",
    integrante:"madre"
}

hijo={
    nombre:"saud",
    apellido:"haikal",
    edad:3,
    integrante:"hijo"
}

mascota={
    nombre: "Copito",
    apellido: "haikal",
    edad:1.5,
    integrante:"mascota"
}

let familia=[padre , madre , hijo , mascota]

function miembrosFamilia(){
    familia.forEach((x) => {
        console.log(`Hola soy ${x.nombre} ${x.apellido} (${x.integrante}) y tengo ${x.edad} años`)
      
    })
}
miembrosFamilia()


//ejercicio 13

ciudadano={
    nombre: "armando", apellido :"ramirez", esColombiano: "si", edad: "48", estudios: "en el exterior"
}


for (const propiedad in ciudadano) {
    console.log(`${propiedad}`);
}

//ejercicio 14

for (const propiedad in ciudadano) {
    console.log(`${ciudadano[propiedad]}`);
}


//ejercicio 15

let giveMeaNumber= Number(prompt("Ingresa numeros al azar, cuando quieras parar ingresa 0"))

let even=[]
let odd=[]

do {
    giveMeaNumber= Number(prompt("Ingrese un numero o 0 para finalizar"))
    if (giveMeaNumber % 2 == 0) {
       even.push(giveMeaNumber) 
    } else {
        odd.push(giveMeaNumber)
    }
   } while (giveMeaNumber > 0)

   let suma15 = even.reduce((total, num) => {
    return total + num
   })
   console.log(`par ${suma15}`);

   let suma16 = odd.reduce((total, num) => {
    return total + num
   })
   console.log(`impar ${suma16}`);


//ejercicio 16

let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let masGrande=0

numbers.forEach(element => {
    if (element > masGrande) {
        masGrande= element
    }
});
console.log(masGrande)

