

let mi_nombre = prompt("Adivina mi nombre !!!")

// tolowerCase = cambiar a minuscula


while (mi_nombre.toLowerCase() !== "cesar"){
    mi_nombre = prompt("sigue intentando")

}
    alert("hey !!. adivinaste mi nombre");



// do 

do{
    mi_nombre = prompt("sigue intentando");
}while (mi_nombre.toLowerCase() !== "cesar");

alert("hey !!. adivinaste mi nombre");


//........................................................................................
// con recursividad

function adivina_mi_nombre(mi_nombre){
     mi_nombre = prompt("adivina mi nombre !!");
     if ( mi_nombre === "cesar"){
        alert("hey !!. adivinaste mi nombre");
        return
     }

     adivina_mi_nombre(mi_nombre); 
}
adivina_mi_nombre()
