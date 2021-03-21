
// funciones 
/*
function sumar ( numero1,numero2){
       let total = numero1 + numero2 ;
       console.log("esta es la suma",total)
       let poner_html = document.write("esta es la suma",`${total}`) 
       return poner_html 
}
sumar(5,4);  


function restar(numero1,numero2){
      let total = numero1 - numero2 ;
      console.log("esta es la resta",total)
      let poner_html = document.write(`<div style="display: flex; flex-direction: column;"></div>,${total}`)  // es para bajar linea parrafo
      return poner_html
}

restar (5,4)



//  practica.......................................................................

// escuacion cuadratica   x = ((-b + 0.5 ** (b ** 2 - 4 * a * c)) / 2) * a;

function ecuacion(numero1,numero2,numero3){
      let total = ((numero2 + 0.5 **( numero2**2 -4 * numero1 *numero3))/2)* numero1 ;
      console.log("esta es la ecuacion cuadratica",total)
      let poner_html = document.write("esta es la ecuacion cuadratica",`${total}`) 
      return poner_html
}
ecuacion(2,2,1)
*/


// 2................................................................
//  const resultado = function ecuacion2(nun1,nun2){


/*
// bucle - while

let contador = 0;
while (contador < 10){
   console.log (contador);
   contador ++ ;

}



// funcion recursiva

function recursividad (contador){
    if (contador >=10){
        return;
    }
    console.log(contador);
    recursividad(contador+1);

}
recursividad(0)

*/



// funciones anidadas
/*

function sumaCuadrados (a,b){
    function cuadrado (x){
        return x*x;
    }

  return cuadrado(a) + cuadrado(b)


} console.log(sumaCuadrados(2,3))



// practuca
// (a + b)4 = a4 + 4a3b + 6a2b2 + 4ab3 + b4

const binomio_de_newton_4 = function binomio_cuarta(a, b) {
    function suma_cuarta(a, b) {
      return a ** 4 + b ** 4;
    }
    function suma_cubo(a, b) {
      return 4 * (a ** 3 * b) + 4 * (a * b ** 3);
    }
    function multi_cuadrados(a, b) {
      return 6 * (a ** 2 * b ** 2);
    }
  
    return suma_cuarta(a, b) + suma_cubo(a, b) + multi_cuadrados(a, b);
  };

  

  //............................................

  function saludo_compuesto (mensaje1, mensaje2){
    function mostrasr_saludo1(mensaje1){
        return mensaje1;

    }
    function mostrar_saludos2(mensaje2){
        return mensaje2;
    }

  return mostrasr_saludo1(mensaje1) + " " + mostrar_saludos2(mensaje2);




  }
  console.log(
      saludo_compuesto("hola","bienvenidos"))


*/

 //..................................................
 //.................................................


 // typeof

 const mi_peticion_de_servidor = [

      {
        nombre : "cesar",
        edad : "35",
        altura: 1.80,
      },
      {
        nombre : "brenda",
        edad : "22",
        altura: 1.7,
      },
      {
        nombre : "leonidad",
        edad : "45",
        altura: 1.85,
      },


 ];


 function generarid(nombre,edad){
     console.log(typeof(edad))
     return nombre + ( edad * 2)
 }

 console.log(
     generarid(mi_peticion_de_servidor[0].nombre,mi_peticion_de_servidor[0].edad)
 );
  