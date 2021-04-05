// destructuracion


let apellidos = ["ramos","meza","vargas"]

let primerApellidos = apellidos[0]

let segundoApellidos = apellidos[1]

let tercerApellidos = apellidos[3]

//console.log(primerApellidos);

//..

let[apellido1,apellido2,apellido3] = apellidos ;

console.log(apellido1)

//..

let [manzana,pera] = ["manzana","pera"];

console.log(manzana)

//..

let [saludo,,,nombre] = ["hola","mi","amor","brenda"]

console.log(saludo,nombre)


// sesiones 

let [a,...restoDeElementos] = ["a","e","i","o","u"]

console.log(a,restoDeElementos)


//..

function obtenerNombrePais(){
    return ["peruano","32 millones","pollito a la brasa","Peru"]
}
let [gentilicio,poblacion,platoTipico,nombre1] = obtenerNombrePais()

console.log(gentilicio)

//...

let peru = {
    nombreOf : "Republica del Peru",
    gentilicio1 : "Peruano",
    poblacion1 : "33 millones"
}


let {nombreOf, gentilicio1, poblacion1} = peru

console.log(gentilicio1)

//..


let brasil = {
    nombreOf1 : "Republica del Brasil",
    gentilicio2 : "Brasileño",
    poblacion3 : "211 millones"
}


let {nombreOf1, gentilicio2, poblacion3} = brasil

console.log(gentilicio2)

//





let arrayDeNumeros = [1, 2, 3, 4, 5];

let arrayDeNombres = ["Marco", "Polo", "Raul", "Andrea", "Jimena"];

let arrayDeUsuarios = [
  { nombre: "Paul", edad: 21, colorFav: "verde" },
  { nombre: "Marie", edad: 31, colorFav: "azul" },
  { nombre: "Jhon", edad: 16, colorFav: "rojo" },
  { nombre: "Carla", edad: 51, colorFav: "dorado" },
  { nombre: "Paula", edad: 11, colorFav: "verde" },
  { nombre: "Mario", edad: 41, colorFav: "azul" },
  { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
  { nombre: "Carlos", edad: 41, colorFav: "dorado" },
  { nombre: "Paulina", edad: 2, colorFav: "verde" },
  { nombre: "Marcos", edad: 65, colorFav: "azul" },
  { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
  { nombre: "Jimena", edad: 71, colorFav: "dorado" },
];


let [nom1,,,,nom4] = arrayDeNombres

console.log(nom1,nom4)

let [num1,,,,,,,,,,,num20] = arrayDeUsuarios

console.log(num1)
console.log(num20)