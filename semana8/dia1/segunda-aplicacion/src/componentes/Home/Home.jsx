// react , es una libreria que me permite hacer interfaces graficas

//es basada en componentes funcionales (funciones que generan una pieza de codigo de UI )
//ej.un navbar, un footer, un Home

//react usa jsx , que es javascript con "superpoderes" o le agregan a la sintaxis de javascript
//ciertas funcionalidades
//eso no quita que pueda seguir trabajando en archivos con .js

//me permite trabajar la logica(funcionalidades(javascript))y la interfaz de usuario(UI) que es el html

//es mantenido por Facebook
// usa una sintaxis basada en XML



import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [mes, setMes] = useState("");

  function haciendoClick() {
    console.log("Hiciste click pero pasandolo en una funcion");
  }

  const funcionFLechaParaEventos = () => {
    console.log("Usaste una funcion flecha");
  };

  function funcionConParametros(dataQueLLegaDesdeLaFuncionEnMiBoton) {
    //deberia imprimir "valor"
    console.log(dataQueLLegaDesdeLaFuncionEnMiBoton);
  }

  function adivinarElMes(mesActual) {
    if (mesActual === "junio") {
      setMes("Junio");
      alert(`Adivinaste el mes :  ${mes}!!!!`);
    } else {
      setMes("");
      alert("Uy!, suerte para la proxima !")
    }
  }
  return (
    <div className="container">
      <button
        onClick={() => {
          console.log("Hiciste click!!!");
        }}
      >
        Boton 1
      </button>

      <button
        onClick={() => {
          haciendoClick();
        }}
      >
        Boton 2
      </button>

      <button onClick={funcionFLechaParaEventos}>Boton 3</button>

      <button
        onClick={() => {
          funcionConParametros("valor");
        }}
      >
        Pasando parametros
      </button>

      <button
        onClick={() => {
          adivinarElMes("junio");
        }}
      >
        Adivina el mes!!!
      </button>
      
    </div>
  );
}

export default Home;

/*
<div>
        {blogs?.map((blog)=>(
          <Blog
          titulo={blog.titulo}
          body={blog.body}
          autor={blog.autor}
          url={blog.url}
          key={blog.id}
          
          
          
          />
        )
        
        
        
        )}
      </div>*/