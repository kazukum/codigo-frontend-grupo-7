
// objetos

// es una coleccion de propiedades 

// que es una propiedad ?

// una propiedad esta compuesta de llaves(key) y valores(value)

// es un tipo de datos

/*
Miobjeto.nombreDelaPropiedad // asi es como yo accedo a una propiedad en mi objeto

let Miobjeto = new Object();

Miobjeto.propiedad1 = "es un objeto"

Miobjeto.propiedad2 = "es otra propiedad"

Miobjeto.propiedad3 = "es otra otra propiedad"

//...........

// forma recomendad de declarar objetos
let Miobjeto2 = {
    propiedad1 : "esto es un valor extenso",
    propiedad2 : "...",
    propiedad3 : "...",

}

//accede a una propiedad
Miobjeto2["propiedad1"]
console.log(Miobjeto2["propiedad1"])



let comida_faborita = new Object();

comida_faborita.nombre = "lomo saltado"

comida_faborita.costo = 20.45;

comida_faborita.rating =[1,2,3,4,5];

comida_faborita.esteDisponible = true;

comida_faborita["nombre"] = "pizza"   // asignarle un valor  a un objeto

console.log(comida_faborita["nombre"])  // acceder a un valor de un objeto




let miNuevoOjeto = {
    propiedad1 :"esta es una cadena de texto",
    propiedad2 : 23 ,
    propiedad3 : true,

};

miNuevoOjeto.propiedad1; // estoy accediendo a la propiedad  // solo leo

console.log(miNuevoOjeto.propiedad1)  // para mostrar
miNuevoOjeto.propiedad3= false; // estoy escribiendo un nuevo valor de la propiedad

miNuevoOjeto["propiedad2"] = 67.34455555;
console.log(miNuevoOjeto.propiedad3)
console.log(miNuevoOjeto.propiedad2)


//........................

function mostrarPropiedades(objeto, propiedadObjeto) {
    let resultado = "";
  
    for (let elemento in objeto) {
      if (objeto.hasOwnProperty(elemento)) {
        resultado += `${propiedadObjeto}.${elemento} = ${objeto[elemento]} \n`;
      }
    }
    return resultado;
  }
  
  let imprimeMiObjeto = mostrarPropiedades(miNuevoObjeto, "miNuevoObjeto");
  
  //console.log(imprimeMiObjeto);
  
  //funcion cuyo fin es imprimir el nombre de las propiedades de un objeto
  function mostrarNombresPropiedadesDelObjeto(objeto) {
    let resultado = "";
  
    //este for-in recorre un objeto y hace una vuelta por cada elemento
    // ej. si mi objeto tiene 5 elementos , hara 5 vueltas
    for (elemento in objeto) {
      resultado += `${elemento} \n`; // en cada iteracion guardo en resultado mi elemento(nombre)
    }
  
    return resultado; //  esto es lo que mi funcion vale , todo lo que va justo al lado de la palabra return
  }
  //estoy impriendo el resultado de la llamada a la funcion
  console.log(mostrarNombresPropiedadesDelObjeto(miNuevoObjeto));

  */

//.........................................................................................
  /* codigo de un compañero falta datos 
 
  let miNuevoOjeto = {
    propiedad1 :"esta es una cadena de texto",
    propiedad2 : 23 ,
    propiedad3 : true,

};


  function mostrarValores(objeto){
      let resultado = ""
      for (let elemento in objeto){
          resultado += `${objeto[elemento]} \n`
      }
      return resultado
  }

  console.log(mostrarValores(miNuevoOjeto))

 */

  //....................................................

  function Carro(marca,modelo, anio){
    this.marca = marca;
    this.modelo  = modelo;
    this.anio = anio;
}

let mechitaBenz = new Carro("Mechita benz","el ultimo",2077)
mechitaBenz.anio
mechitaBenz.marca
mechitaBenz.modelo