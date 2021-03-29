

// es un metodo con un conjunto de funciones para hacer calculos matematicos


function calcularAreaCirculo(radio){
     return Math.PI * Math.pow(radio,2)

}
console.log(calcularAreaCirculo(2))


//numero mayor

let numeroMayor = Math.max(1,2,3,4,5,6)

console.log(numeroMayor)



let arrayNumeros =[23,43,56,12,23,45]

console.log(Math.max(...arrayNumeros))

// numero menor
console.log(Math.min(...arrayNumeros))