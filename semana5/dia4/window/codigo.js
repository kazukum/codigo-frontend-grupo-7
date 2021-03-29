
// window

// es para obtener informacion url
window.location
console.log(window.location)

console.log("este es la url de la pajina", location.href)

console.log("Este es el hostname",location.hostname)

console.log("Este es el host",location.host)

console.log("este es mi path (ruta/camino):", location.pathname)

console.log("este es el protocolo que uso:", location.protocol)



// cuenta asta el 6
let contador = 0;
let intervalo = setInterval(() => {
    console.log("hola mundo")
 

    console.log(contador)
    contador ++
    if (contador === 6){
    clearInterval(intervalo)
  
}

},2000);


// se ejecuta una vez
setTimeout(()=> {
    console.log("esta es la ejecucion de setTimeout ",);
},2000)


// localstorage
//almacenamiento local


window.localStorage.setItem("contrasenhas","1234")

let contra = window.localStorage.getItem("contrsenhas")
console.log(contra)

let profile = window.localStorage.setItem("tema", "claro")

window.localStorage.removeItem("contra")


//........................................................


if (window.confirm){
   "deseas eliminar todas las variables guardadas"
  
}{

     window.localStorage.clear()
}

