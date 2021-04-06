
/*
let promesa = new Promise ((resolve,reject) => {


    //ejecutando el algoritmo...

    if (condicion){
        resolve("haz algo aca");
    }else {
        reject(Error("hey!!, no es una suma valida"));
    }
});


*/
//las promesas tienen 3 estados

//1 pendiente
//2 fue resulta(se cumplio)
//3 fue rechazada(no se cumplio)

let sumar = function(x,y){
    return new Promise ((resolve,reject)=>{
        let sum = x + y
        if (sum){
            resolve(sum)
        }else{
            reject(Error("hey!!, no es una suma valida"))
        }
    })
}


console.log("Sumar","2","+","3",sumar(2,3))


//...restar

let restar = function(x,y){
    return new Promise ((resolve,reject)=>{
        let res = x - y
        if (res){
            resolve(res)
        }else{
            reject(Error("hey!!, no es una suma valida"))
        }
    })
}


console.log("Restar","2","-","3",restar(2,3))


//..multiplicar

let multiplicar = function(x,y){
    return new Promise ((resolve,reject)=>{
        let mult = x * y
        if (mult){
            resolve(mult)
        }else{
            reject(Error("hey!!, no es una suma valida"))
        }
    })
}

console.log("Multiplicar","2","x","3",multiplicar(2,3))


//..dividir

let dividir= function(x,y){
    return new Promise ((resolve,reject)=>{
        let divi = x / y
        if (divi){
            resolve(divi)
        }else{
            reject(Error("hey!!, no es una suma valida"))
        }
    })
}

console.log("Dividir","2","/","3",dividir(2,3))



/*
sumar (2,2)
.then((resultadosuma)=>{
    return restar(resultadosuma,4);
    })
.THEN((ResultadoResta)=>{
    return sumar (resultadoResta, 7);

})
.c
*/


//binomio cuadrado

const binomio = (a,b) => {
    function parte1() {
      return new Promise((resolve, reject) => {
        let primerFactor = a ** 2;
        primerFactor
          ? resolve(primerFactor)
          : reject(Error("No es una operacion valida-parte1"));
      });
    }
    function parte2() {
      return new Promise((resolve, reject) => {
        let segundoFactor = 2 * a * b;
        segundoFactor
          ? resolve(segundoFactor)
          : reject(Error("No es una operacion valida-parte2"));
      });
    }
    function parte3() {
      return new Promise((resolve, reject) => {
        let tercerFactor = b ** 2;
        tercerFactor
          ? resolve(tercerFactor)
          : reject(Error("No es una operacion valida-parte3"));
      });
    }
  
    return parte1().then((resultadoParte1) => {
      parte2().then((resultadoParte2) => {
        parte3().then((resultadoParte3) => {
          console.log(resultadoParte1 + resultadoParte2 + resultadoParte3);
        });
      });
    });
  };
  
  binomio(2, "w");