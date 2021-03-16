//este es un comentario de una linea

/*este es un comentario multilineas javasscript*/

//variable de tipo texto tipo (var) ya no se usa aora es (let)
let nombre="cesar" ;

let sistemaOperativo= "linux";


alert(
    `Mi segundo nombre es ${nombre} y mi sistema favorito es ${sistemaOperativo}`
  );


let a = 4
let b = 2

let suma = a+b
alert(suma);
console.log(suma)

let resta= a-b
alert(resta)
console.log(resta)

let multiplicacion = a*b
alert(multiplicacion)
console.log(multiplicacion)

let division = a/b 
alert(division)
console.log(division)

let potenciacion = a**b
alert(potenciacion)
console.log(potenciacion)

let radicacion = a**0.5
alert(radicacion)
console.log(radicacion)

let modulo = a%b
alert(modulo)
console.log(modulo)

//declarar una variable para la formula de grados centigrados a fahrenheit

// variable grados centigrados= formula en fahrenheit

//variable grados farenheit = formula en centigrados


let celsius = 1

let farenheit = (celsius *(9/5)+32)

console.log("celsius a farenheit", farenheit)


let farenheit=1

let celsius = (farenheit * (5/9)-32)

console.log("farenheit a celsius", celsius)


// fahrenheit a celsius

// tipo booleano -> true- verdad - 1 ; false -> falso-0

let soyFrontend = true;

let soyMachineLearning = false;

//JSON -> Javascript Object Notation - notacion de objetos de javascript, la forma en la que javascript define un objeto

let json2 = {
  propiedad6: 123,
};

let json = {
  key: "value",
  llave: "valor",
  propiedad1: "valor de texto",
  propiedad2: 34,
  propiedad3: true,
  propiedad4: json2,
};

let josue = {
  nombre: "josue",
  apellidoPaterno: "retamozo",
  apellidoMaterno: "vargas",
};

let nombreCompleto = `${josue.nombre} 
                      ${josue.apellidoPaterno} 
                      ${josue.apellidoMaterno}`;

console.log("Mi nombre completo es: ", nombreCompleto);


//vamos a crear un objeto donde almacenaremos nuestros hobbies favoritos , numero de mascotas que tenemos y ademas si somos hombres le damos true/false e igual con mujeres
// vamos a armar un alerta que reciba como datos nuestros nombres y de un mensaje de bienvenida
// vamos a escribir la formula cuadratica

let objeto = {
    hobbie1: "leer",
    hobbie2: "programar",
    hombre: true,
    mujer: false,
  };
  
  let primerNombre = "Josue";
  
  let apellido = "Retamozo";
  
  alert(`${primerNombre} ${apellido}`);
  
  let x = 0;
  let a = 0;
  let b = 0;
  let c = 0;
  
  x = ((-b + 0.5 ** (b ** 2 - 4 * a * c)) / 2) * a;
