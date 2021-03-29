// las clases en js son funciones con sitaxis especiales pero siguen siendo funciones


//funcion

const func = function(){}


// ckase

const clase = class{}

console.log (Object.getPrototypeOf(func))
console.log (Object.getPrototypeOf(clase))


