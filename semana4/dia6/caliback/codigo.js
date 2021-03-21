


function mostarAlerta(){
    alert("hola!!")
}

const boton = document.querySelector("p")

boton.addEventListener("click",mostarAlerta)



//..............................................................................


let segundo = 30;

function empezar_cuenta_atras (){
    setInterval (function(){
         segundo --;
         imprimirSegundos();
    },2000);

}

function imprimirSegundos(){
    console.log(segundo);
}

empezar_cuenta_atras();