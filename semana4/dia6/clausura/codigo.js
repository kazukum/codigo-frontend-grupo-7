
//scope espacio disponible que esta entre llaves {}

function ejemplo(){
   let texto = "texto inicial"
   
   function mostrarTexto(){
       alert(texto);
   }

   mostrarTexto();

}

ejemplo()




// 2

function crearFuncion (){
    let nombre = "cesar";

    function mostrarNombre(){
        alert(nombre)
    }

    return mostrarNombre;
} 

let llamarmiFuncion = crearFuncion();
llamarmiFuncion();


//. 3............................................................


function sumadorDeNumeros(x){
    // devuelve una funcion anonima(sin nombre)
    return function(y){
        // a su vez esta funcion anonima devuelve una suma
        return x + y;
    };

}

//let suma5 = sumadorDeNumeros(5):

 let suma10 = sumadorDeNumeros(10)

 //console.log (suma5)

 console.log(suma10)

 // console.log(suma5(2))

 let suma10y35 = suma10(35)
 console.log(suma10y35)


 // 4.................................................................


 function generadorDeSaludos(saludoInicial){
     return function(saludoSecuandario){
         return saludoInicial +", " + saludoSecuandario;
     }
 }

 let saludo_mañanero_primera_parte = generadorDeSaludos("hola buenos dias");

 let saludo_mañanero_completo = saludo_mañanero_primera_parte(
     "que tal ? mucho gusto"
 );
 console.log(saludo_mañanero_completo);


 