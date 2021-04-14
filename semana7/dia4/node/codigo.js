

console.log("Hola Mundo");

const  libros = require("./libros")

libros.map((libro)=>{console.log(libro)})


let cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Hola a todos compañeros Codigo",
	e : "oO",
	T : "U "
}));