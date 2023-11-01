
const miNombre="Laura"
const miApellido="Paredes"
let miEdad=24
const miMascota = "Copito"
let edadMascota = 1.5

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

const nombreCompleto= miNombre + " " + miApellido
let textPresentacion= miNombre+miApellido+miEdad+miMascota+edadMascota

let sumaEdades= miEdad + edadMascota
console.log(sumaEdades)
let restaEdades= miEdad - edadMascota
console.log(restaEdades)
let productoEdades= miEdad * edadMascota
console.log(productoEdades)
let divisionEdades= miEdad / edadMascota
console.log(divisionEdades)

let alumno={
nombre: "ernesto",
genero: "masculino",
edad: 22,
nacionalidad: "mexicana",
comidaFavorita: "tacos de barbacoa"
}

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.genero)
console.log(alumno.edad)
console.log(alumno.nacionalidad)
console.log(alumno.comidaFavorita)

let mascota={
nombre: "Copito",
raza: "persa extremo",
color: "blanco",
añoDeNacimiento: 2022,
comidaFavorita: "pollito",
hobby:"amasar"
}

console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.raza)
console.log(mascota.color)
console.log(mascota.añoDeNacimiento)
console.log(mascota.comidaFavorita)
console.log(mascota.hobby)

let mango={
peso:"300 gramos",
color:"amarillo"
}

let banano={
peso:"80 gramos",
color:"amarillo"
}

let pera={
peso:"120 gramos",
color:"verde"
}

let fresa={
peso:"11 gramos",
color:"rojo"
}

let arandano={
peso:"2 gramos",
color:"azul"
}

let kiwi={
peso:"90 gramos",
color:"cafe"
}

let frutas=["mango","banano","pera","fresa","arandano","kiwi"]

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
console.log(frutas[5])

let ingresaTuEdad=prompt("ingresa tu edad")
let soyMayordeEdad=ingresaTuEdad>=18
console.log("Soy mayor de edad" + " " + soyMayordeEdad)

let numeros=[10,20,30,40,50,60]

console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[5])

let papa={
nombre: "carmelo",
edad:49,
ocupacion: "ingeniero"
}

let mama={
nombre: "macarena",
edad:45,
ocupacion: "medico"
}

let hijo={
nombre:"favricio",
edad:14,
ocupacion:"estudiante"
}

let hija={
nombre:"rocio",
edad:17,
ocupacion:"patinadora"
}

let tia={
nombre:"gertudriz",
edad:47,
ocupacion:"ama de casa"
}

let abuelita={
nombre:"yolanda",
edad:78,
ocupacion:"pensionada"
}

let familia=[papa,mama,hijo,hija,tia,abuelita]

console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])
console.log(familia[5])

let textoAleatorio= `${frutas[1]} ${numeros[3]} ${familia[4].nombre}`

console.log(textoAleatorio)

let edad1=prompt("mi edad")
let edad2=prompt("edad de mi compañero")
let edadesIguales= edad1 == edad2
console.log("mi edad es igual a la de mi compañero" + " " + edadesIguales)
let soyMayor= edad1 >= edad2
console.log("mi edad es mayor a la de mi compañero" + " " + soyMayor)
let soyMenor= edad1 <= edad2
console.log("mi edad es menor a la de mi compañero" + " " + soyMenor)

let edadPersona=prompt("edad")
let estaturaPersona=prompt("estatura")
let puedeSubir= edadPersona>6 && estaturaPersona>120
console.log("puede subir a la atraccion" + " " + puedeSubir)

let tipoDePase=prompt("¿que clase de pase tienes?")
let saldo=prompt("¿Cual es tu saldo?")
let puedePasar="la persona puede pasar (true)"

if (tipoDePase == "vip" || saldo > 1000) {
    console.log(puedePasar)
}

else{
    console.log("la persona puede pasar false")
}