
//arreglos = array
/*
let arreglo =[1,2,3,4,5]

let alumnos_contigo = ["pepito","maria","juan", "jose"]

let mi_suerte = [true,false,true,false]

let varios_elementos =["jose",24,"soltero",1.70, true]

varios_elementos[0] // "jose"
varios_elementos[1] // 24
varios_elementos[2] //"soltero"
varios_elementos[3] // 1.70
varios_elementos[4] // true

varios_elementos[100] //undefine


varios_elementos.length // la longitud de mi arreglo

varios_elementos[varios_elementos.length-1]

*/


//-............................................................................

//practica arrays con la tarea realizada ayer

/*

let seleccionar = document.querySelector("select")
let titulo = document.querySelector("h1")
let letra = document.querySelector("p")



function CatalogoCanciones(){


let elegir = seleccionar.value




let contenido_canciones = ["In The End","Numb","Faint","Crawling"]

contenido_canciones[0]
contenido_canciones[1]
contenido_canciones[2]
contenido_canciones[3]


switch (elegir){
    case "In The End":
    titulo.textContent = contenido_canciones[0]
    letra.textContent = "One thing I don't know why It doesn t even matter how hard you try Keep that in mind, I designed this rhyme To explain in due time All I know Time is a valuable thing Watch it fly by as the pendulum swings Watch it count down to the end of the day The clock ticks life away "
    break;    

    case "Numb":
    titulo.textContent = contenido_canciones[1]
    letra.textContent = "I'm tired of being what you want me to be Feeling so faithless, lost under the surface Don't know what you're expecting of me Put under the pressure of walking in your shoes Every step that I take is another mistake to you (Caught in the undertow, just caught in the undertow)"
    break;

    case "Faint":
    titulo.textContent = contenido_canciones[2]
    letra.textContent = "I am a little bit of loneliness, a little bit of disregard Handful of complaints but I can't help the fact That everyone can see these scars I am what I want you to want, what I want you to feel But it's like no matter what I do, I can't convince you To just believe this is real "
    break;
    
    case "Crawling":
    titulo.textContent = contenido_canciones[3]
    letra.textContent ="Crawling in my skin These wounds, they will not heal Fear is how I fall Confusing what is real There's something inside me that pulls beneath the surface Consuming, confusing This lack of self control I fear is never ending Controlling I can't seem "
    break;
    
    default :
    alert("ERROR CANCION NO ENCONTRADA")
    titulo.textContent = ""
    letra.textContent = "No ingresaste ninguna cancion";
}


}


seleccionar.addEventListener("change",CatalogoCanciones)

*/

//...................................................................................



// aplicando push



let varios_elementos =["elemento1","elemento2","elemento3","elemento4", "elemento5"]

varios_elementos[0] 
varios_elementos[1] 
varios_elementos[2]
varios_elementos[3] 
varios_elementos[4] 

console.log(varios_elementos)

varios_elementos.push("cesar")


console.log(varios_elementos[varios_elementos.length-1], ":este es el elemento añadido")
console.log(varios_elementos)


varios_elementos.pop()
console.log(varios_elementos[varios_elementos.length-1], ":este es el nuevo ultimo numero")

console.log(varios_elementos)


// aplicando shift es eliminar el primer elemento


varios_elementos.shift()
console.log(varios_elementos)


// averiguando el indice de un elemento con index01("elemento")

console.log("el indice de mi elemento",varios_elementos.indexOf("elemento5"))
