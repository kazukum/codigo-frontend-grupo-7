

// para aceder a un id getElementById
const demoId = document.getElementById("demo");

demoId.style.border = "5px solid blue"



// para aceder a una clase getElementByclassname

const demoClass = document.getElementsByClassName("demo");


demoClass[0].style.border = "2px dashed red"
demoClass[1].style.border = "2px dashed orange"

/*
// con for
for(recorre in demoClass){
    
    demoClass[recorre].style.border = "2px dashed red"
}

// con while
etiqueta = 0

while (etiqueta < demoClass.length){
    demoClass[etiqueta].style.border = "2px solid orange"
    etiqueta ++
}

*/
//........................................................



// por etiqueta  getElementsByTagName

let demoTag = document.getElementsByTagName("article");

for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = "1px solid blue";
  }
  


// agarrando id      #
const demoquery = document.querySelector("#demo-query")

demoquery.style.border = "2px solid blue"




// agarrando clases    .
const demoQueryAll = document.querySelectorAll(".demo_query_All")


demoQueryAll.forEach((elemento) => {
    elemento.style.border = "2px solid green"
})


/*

//for-each

Array.from(demoClass).forEach((elemento) => {
  elemento.style.border = "5px solid pink";
});


*/

//.....................................................................................

const demoTitle = document.getElementById("titulo");

demoTitle.addEventListener("click", ()=>{
    alert("hey me clickeaste !!!")
})




