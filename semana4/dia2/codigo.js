

//condicionales
// cuando uso == compara contenido 
// cuando uso === compara contenido + lo que ai en la variable



let condicion = true;

if(condicion === true){
    console.log("hola amigos bienvenidos a codigo")
    alert("hola amigos bienvenidos a codigo")
}else{
    console.log("y que estas esperando")
    alert("y que estas esperando")
}

//..........................................................
let a = 0;
let b = 0;

a = 4;
a = 6;
a = 9;

console.log(a);

b = 5;

let suma = a + b;
//  el === compara contenido y tipo
if (suma === "9") {
  //alert("Felicitaciones , adivinaste!!!");
} else {
  //alert("oh , lo siento , sigue intentando!! :)");
}
//........................................................


//practica
let nume1 = 4
let nume2 = 3

if(nume1 + nume2 === 6){
    console.log("respuesta correcta")
    alert("respuesta correcta")

}
else{nume1 + nume2 === 7
    console.log("respuesta incorrecta")   
    alert("respuesta incorrecta")

}



let lenguaje_de_programacion = "C++"

if(lenguaje_de_programacion ==="python"){
    console.log("Python es asombroso")
}else if(lenguaje_de_programacion === "javascript"){
    console.log("Javascript tambien lo es !")
}else if(lenguaje_de_programacion === "php"){
    console.log("mejor apaga tu computadora amigo/a xd")
}else if(lenguaje_de_programacion == "c++"){
    console.log("woow tu eres de los bravos ")
}else{
    console.log("que? aun no sabes ninguno ? ñ_ñ")    
}




// practica

let cancion = "Numb"

if(cancion ==="Numb"){
    console.log("I'm tired of being what you want me to beFeeling so faithless, lost under the surface")
}else if(cancion === "Red hot"){
  
}else if(cancion === "maluma"){
   
}else if(cancion == "shakira"){
    
}else{
    console.log("no es mi cancion")    
}


//............................................................................
// para desir diferente   !==

function miFuncion (){
   console.log("Mi primera funcion es lo mejor del mundo!!!!. ")


}

function imprimeMiNombre(nombre){
   

    if(nombre !== ""){
        return  `Mi nombre es : ${nombre}`
      
      
    }else if (nombre === "" || nombre === undefined){
       return "Debes ingresar un nombre valido !. gracias!."
       

    }else{
        return "hey!, dato incorrecto!"
    }

    
}
console.log(imprimeMiNombre("cesar"));
console.log(imprimeMiNombre(""))

// undefined  no definido no tiene un valor asignado pero la variable o constante que lo contiene si existe

// y -> si mi condicion1 es cierta y mi condicion2 es cierta hago algo..

// o -> si mi condicion1 es cierta o mi condicion2 es cierta hago algo..

// let cadena de texto = " es un tipo string"
// let numero = " es de tipo number"
//let booleano =" es de tipo bool (true/false)"
// let undefined = undefined 



function calculamisañosperro(edad){
 
    if(edad === undefined){
        return "deves ingresar un valor valido"
    }
    if(edad >0 && edad < 100){
        return `Mi edad en edad perro es ${edad * 7}`

    }
    if(edad === 0){
        return "ingresa un numero valido"
    }


}

console.log(calculamisañosperro())
console.log(calculamisañosperro(24))
console.log(calculamisañosperro(0))



// practica

function calculaclima(clima){

    if(clima === "lluvioso"){
        return "la ciudad esta mojada"
    }
    if (clima === "calido"){
        return "Ase demasiado calor"
    }
    if (clima === "nublado"){
        return "no se puede ver esta muy nublado"
    }

    if (clima === "" || clima === undefined){
        return "ingreso incorrecto de clima"
    }
}

console.log(calculaclima("lluvioso"))
console.log(calculaclima("calido"))
console.log(calculaclima("nublado"))
console.log(calculaclima(""))


//............................................................

// <script defer src = "codigo.js"> para que se ejecute primero mi html

// aplicando html


let seleccionar = document.querySelector("select")
let parrafo = document.querySelector("p")


function establecerClima(){

let eleccion = seleccionar.value

if (eleccion === "soleado"){
     parrafo.textContent = "el dia esta agradable y muy bonito"

}else if (eleccion === "lluvioso"){
     parrafo.textContent = "esta lluviendo mejor quedate en casa"
}else if (eleccion === "nevado"){
     parrafo.textContent = "si sales, trata de salir abrigado"
}else if (eleccion === "nublado"){
    parrafo.textContent ="no hace falta que salgas con lentes de sol "
}else {
    parrafo.textContent = "";
}

}

seleccionar.addEventListener("change",establecerClima)
