
// FOR = para

for(let pasos = 0; pasos < 5;pasos++){
    console.log("camina de frente")
}

//.......................................................................
// practica

// % me sirve para obtener el resto de una division
// voy a imprimir todos los numeros pares(empezando en 0) que sean menor a 300 usando for

// 1


for(let par = 0; par <= 300 ;par++){
   if(par % 2 === 0){
       console.log(par)
   }
   
}


//.................................................................
//2
// voy a imprimir todos los numeros divisibles(que cuando lo divido con el nuemro que deseo , me da 0n en el resto) entre 3 o 5 o 7 , hasta que llegue al numero 1000 


for (let div = 0 ; div <1000 ; div ++){
    if(div %3 === 0 || div  %5 ===0 || div  %7 === 0){
        console.log(div)
    }
}

/*codigo de un amigo
for (let i=0; i<1000; i++){
    if(i===0){
        console.log(`el numero: ${i} no es ni par ni impar`)
    }else if (i%3 === 0){
        console.log(`el numero: ${i} es divisible por 3`)
    }else if (i%5 === 0){
        console.log(`el numero: ${i} es divisible por 5`){

    }else if (i%7 === 0){
        console.log(`el numero: ${i} es divisible por 7`)
}
*/


//...................................................
// 3

// vamos a listar/ mostrar todos los numeros menores a 10 que sean multiplos de 3 o 5 , esto significa que tendremos al 3,5,6 y al 9 y que su suma es 23
// vamos a hacer esto pero con todos los numeros que sean menores a 1000


let suma = 0

for (let i= 0 ; i <10 ; i ++){
    if (i%3 === 0 || i%5 === 0 || i%6 === 0 || i%9 === 0){
    suma += i // suma = suma + i
    
}
}

console.log(suma) 



