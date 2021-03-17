
let seleccionar = document.querySelector("select")
let titulo = document.querySelector("h1")
let letra = document.querySelector("p")



function CatalogoCanciones(){

let elegir = seleccionar.value

if (elegir === "In The End"){
    titulo.textContent = "In The End"
    letra.textContent = "One thing I don't know why It doesn t even matter how hard you try Keep that in mind, I designed this rhyme To explain in due time All I know Time is a valuable thing Watch it fly by as the pendulum swings Watch it count down to the end of the day The clock ticks life away "
    

}else if (elegir === "Numb"){
    titulo.textContent = "Numb"
    letra.textContent = "I'm tired of being what you want me to be Feeling so faithless, lost under the surface Don't know what you're expecting of me Put under the pressure of walking in your shoes Every step that I take is another mistake to you (Caught in the undertow, just caught in the undertow)"


}else if (elegir === "Faint"){
    titulo.textContent = "Faint"
    letra.textContent = "I am a little bit of loneliness, a little bit of disregard Handful of complaints but I can't help the fact That everyone can see these scars I am what I want you to want, what I want you to feel But it's like no matter what I do, I can't convince you To just believe this is real "


}else if (elegir === "Crawling"){
    titulo.textContent = "Crawling"
    letra.textContent ="Crawling in my skin These wounds, they will not heal Fear is how I fall Confusing what is real There's something inside me that pulls beneath the surface Consuming, confusing This lack of self control I fear is never ending Controlling I can't seem "


}else {
    alert("ERROR CANCION NO ENCONTRADA")
    titulo.textContent = ""
    letra.textContent = "No ingresaste ninguna cancion";
}

}

seleccionar.addEventListener("change",CatalogoCanciones)
