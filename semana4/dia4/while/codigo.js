
// uso for cuando se la candidad de elemento que voi a recorrer
// uso while cunado no conosco la cantidad de elmentos que voi a recorrer


// while  = mientras

//++ significa que cuenta de 1 en 1 
/*
let contador  = 0

while (contador <10){
    console.log(contador);
    contador ++;
}
*/


//...............................................................
//  practica


let suma = 0;
let numero = 0;
while (numero < 1000){
   
    if(numero % 3 === 0 || numero % 5 === 0){
        console.log(numero)
      
       suma += numero
       
    } 
    numero++
}
console.log(suma)


