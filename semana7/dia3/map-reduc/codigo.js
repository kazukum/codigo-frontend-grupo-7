


let arrrayNumeros = [10,20,30];
console.log(arrrayNumeros)

let arrrayResultado = arrrayNumeros.map((numero)=> numero * 2);

console.log(arrrayResultado)


// ejercicio hecho por mi
let nombres =["cesar","mirella","victor"]

let agregado = nombres.map((nombre) => nombre + " " + "y " + "brenda")

console.log(agregado)




let arrayDeUsuarios = [
    { nombre: "Paul", edad: 21, colorFav: "verde" },
    { nombre: "Marie", edad: 31, colorFav: "azul" },
    { nombre: "Jhon", edad: 16, colorFav: "rojo" },
    { nombre: "Carla", edad: 51, colorFav: "dorado" },
    { nombre: "Paula", edad: 11, colorFav: "verde" },
    { nombre: "Mario", edad: 41, colorFav: "azul" },
    { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
    { nombre: "Carlos", edad: 41, colorFav: "dorado" },
    { nombre: "Paulina", edad: 2, colorFav: "verde" },
    { nombre: "Marcos", edad: 65, colorFav: "azul" },
    { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
    { nombre: "Jimena", edad: 71, colorFav: "dorado" },
  ];
/*  
mi codigo

  let agregar = arrayDeUsuarios.map((describir)=> "hola soy" +" " + describir.nombre + "Tengo" +" " + describir.edad +" " + "Y mi color favorito es" +" " + describir.colorFav)

  console.log(agregar)

//codigo del profesor

  arrayDeUsuarios.map((usuaruo)=>
  console.log(
      `hola me llamo ${usuaruo.nombre}, Tengo ${usuaruo.edad},Y mi color favorito es ${usuaruo.colorFav} `
  ))
*/

arrayDeUsuarios.map((usuaruo)=>{
 const miusuario = document.createElement("li");
 miusuario.textContent =`hola me llamo ${usuaruo.nombre}, Tengo ${usuaruo.edad},Y mi color favorito es ${usuaruo.colorFav} `
  
document.querySelector("#usuarios").appendChild(miusuario)
}
  )


  //-..............................................................................

  //foreach lo corre todo

let otroArray = [100,200,300]


otroArray.forEach((numero)=> console.log(numero * 3))


//..........

let sumaElementos = [10,20,30];

let resultado = sumaElementos.reduce((acumulador,numero)=>{
   return acumulador + numero;

})

console.log("Resultado del reduce: ", resultado)