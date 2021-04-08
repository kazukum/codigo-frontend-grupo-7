

//funcion asincrona

async function fun_asincrona(){
    return 23 ;

}
// funcion flecha asincrona
const otrafuncion = async () => 42;


console.log(fun_asincrona())

fun_asincrona().then(valor =>{
    console.log("Este es el valor de la promesa",valor)
})


const valor = otrafuncion()
console.log(valor)


//......... transformar
let sumar = (x, y) => {
    return new Promise((resolve, reject) => {
      let suma = x + y;
      if (suma) {
        resolve(suma);
      } else {
        reject(Error("Hey!!, no es una operacion valida"));
      }
    });
  };

//.. tranformado
const sumaNum = async (a, b) => {
    try {
      return await a + b;
    } catch {
      return Error("Hey!!, no es una operacion valida");
    }
  };

  sumaNum(2, 3).then((valor) => {
    console.log(valor);
  });


  //.......practica mi codigo

  const binomio = async (a,b)=>{
      
    try{
        return await (a ** 2) + (2 * a * b) + (b ** 2);
      }catch{
        return Error("Hey!!, no es una operacion valida");
      }
    
}
binomio(4,3).then((valor)=>{
    console.log(valor);
})

//...... codigo del profesor:

//con async/await

const binomio1 = async (a, b) => {
    async function primerFactor() {
      let primerFactor = a ** 2;
      return primerFactor
        ? primerFactor
        : Error("No es una operacion valida-parte1");
    }
  
    async function segundoFactor() {
      let segundoFactor = 2 * a * b;
      return segundoFactor
        ? segundoFactor
        : Error("No es una operacion valida-parte1");
    }
  
    async function tercerFactor() {
      let tercerFactor = b ** 2;
      return tercerFactor
        ? tercerFactor
        : Error("No es una operacion valida-parte1");
    }
  
    const resultado1 = await primerFactor();
    const resultado2 = await segundoFactor();
    const resultado3 = await tercerFactor();
  
    return `Resultado: ${resultado1 + resultado2 + resultado3}`;
  };
  
  console.log(binomio1(2, 3));



  //.......................................

  const nombre = async (primerNombre,segundoNombre,apellidoPaterno,apellidoMaterno)=>{
      try{
          return await primerNombre +" "+ segundoNombre +" "+ apellidoPaterno +" "+ apellidoMaterno
      }catch{

      }
  }

  nombre("cesar","leo","ignacio","rodriguez").then((valor)=>{
    console.log(valor);
})


//..........codigo del profesor

const mostrarNombres = async (
    primerNombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno
  ) => {
    async function devolverPrimerNombre() {
      return primerNombre;
    }
    async function devolverSegundoNombre() {
      return segundoNombre;
    }
    async function devolverApellidoPaterno() {
      return apellidoPaterno;
    }
    async function devolverApellidoMaterno() {
      return apellidoMaterno;
    }
    const pNomb = await devolverPrimerNombre();
    const sNomb = await devolverSegundoNombre();
    const apPat = await devolverApellidoPaterno();
    const apMat = await devolverApellidoMaterno();
  
    return `Mi nombre es : ${pNomb} ${sNomb} ${apPat} ${apMat}`;
  };
  
  // mostrarNombres("Josue", "Patricio", "Retamozo", "Vargas"
  // );
  console.log(
    mostrarNombres("Josue", "Patricio", "Retamozo", "Vargas").then((nombre) => {
      console.log(nombre);
    })
  );

//...........


const trinomio = async (a,b,c)=>{

    try{
        return await (a ** 2) + (b ** 2) + (c ** 2) + (2 * a * b) + (2 * a * c) +(2 * b * c) ;
      }catch{
        return Error("no ingreso numeros");
      }
    
}

trinomio(2,2,2).then((numerador)=>{
    console.log(numerador)
})


//


const trinomio1 = async (a, b,c) => {
    async function primerFactor() {
      let primerFactor = a ** 2;
      return primerFactor
        ? primerFactor
        : Error("No es una operacion valida-parte1");
    }
  
    async function segundoFactor() {
      let segundoFactor = b ** 2;
      return segundoFactor
        ? segundoFactor
        : Error("No es una operacion valida-parte1");
    }
  
    async function tercerFactor() {
      let tercerFactor =c ** 2;
      return tercerFactor
        ? tercerFactor
        : Error("No es una operacion valida-parte1");
    }
    async function cuartaFactor() {
        let cuartaFactor =2 * a * b;
        return cuartaFactor
          ? cuartaFactor
          : Error("No es una operacion valida-parte1");
      }
      async function quintaFactor() {
        let quintaFactor =2 * a * c;
        return quintaFactor
          ? quintaFactor
          : Error("No es una operacion valida-parte1");
      }
      async function sextaFactor() {
        let sextaFactor =2 * b * c;
        return sextaFactor
          ? sextaFactor
          : Error("No es una operacion valida-parte1");
      }
  
    const resultado1 = await primerFactor();
    const resultado2 = await segundoFactor();
    const resultado3 = await tercerFactor();
    const resultado4 = await cuartaFactor();
    const resultado5 = await quintaFactor();
    const resultado6 = await sextaFactor();
  
    return `Resultado: ${resultado1 + resultado2 + resultado3 + resultado4+ resultado5 + resultado6}`;
  };
  
  console.log(trinomio1(2,2,2));

