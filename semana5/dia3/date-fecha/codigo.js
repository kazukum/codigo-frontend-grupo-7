// objeto Date para trabajar con tiempos

const ahora = new Date();
console.log(ahora)

// getTime  me devuelve la cantidad de milisegundos que pasaron desde 1 de enero  de 1970

const milisegundos = ahora.getTime();
console.log(milisegundos)


// fecha cero

const fechaCero = new Date(0)
console.log(fechaCero)


const fehaUniversal = Date.UTC()
console.log(fehaUniversal)


// 61 x 31557666666666

const fechaCeroconMilisegundos = new Date(51 * 31576666666)
console.log(fechaCeroconMilisegundos)


const fehcaString = new Date("july 28 1821 12:00");
console.log(fehcaString)


const anho = fehcaString. getFullYear()

const mes = fehcaString. getMonth()

const diaMes = fehcaString. getDate()

const DiaSemana = fehcaString.getDay()

const hora = fehcaString.getHours()

console.log(hora)


// para modificar

fehcaString.setFullYear("1824");
console.log(fehcaString.getFullYear())



function obtenerEdad(anhoNacimiento) {
    const fechaActual = new Date();
    const anho = fechaActual.getFullYear();
    return anho - anhoNacimiento;
  }
  
  console.log(obtenerEdad(1996));
  
//................................................................................

//tarea es : hacer una funcion  a la que le paso la fecha  de esta manera(en un string en ingles)
// por ejemplo : July 28 1821 12:00
// deben retornar cuantos dias , meses , y años pasaron desde esa fecha

// abs = util para fechas
// getFullYear() para obtener un valor / setFullYear(9) es para dar un valor


function fechaCompleta(fechaNacimiento) {//fecha nacimiento es tipo string, no soporta metodos como getFullYear()
    //objeto que  almacenar mi resultado
      let cumple = {
      dia:0,
      mes:0,
      anho:0,
    };
    //declaro la fecha actual
    const fechaActual = new Date();
    fechaNacimiento = new Date(fechaNacimiento); // estoy reasiggnando fechaNacimiento y de ser una variable de tipo string pasa a ser de tipo Date - fecha
  
    //otengo mi edad en años restando el año actual con el de mi fecha de nacimiento
    const anho = Math.abs(+(fechaActual.getFullYear() - fechaNacimiento.getFullYear()));
    const mes =  fechaNacimiento.getMonth() + 1; //le aumenta 1 porque empieza desde  0
    const dia = fechaNacimiento.getDate();
  
    cumple.anho = anho;
    cumple.mes = mes;
    cumple.dia = dia;
    
    return `
      dia: ${cumple.dia},
      mes: ${cumple.mes},
      año: ${cumple.anho} 
      `;
  }
  
  
  const miCumple = fechaCompleta("June 17 1996 12:00")
  
  console.log(miCumple)