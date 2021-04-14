

import React from 'react'
import "./styles.css"

import Content from '../Content/Content'
import Aside from '../Aside/Aside'
import Imagen from "../Imagen/Imagen"

export const Home = () => {

    
    return (
     <>

        <div className="container">
            <Content/>
            <Aside/>
        </div>
          <Imagen/>
           
          </>
       
    )
}

export default Home
 
        /*

        <>  </> esto no se dibuja en el doom pero funciona como div

        import goku from "../../assets/imagenes/goku.jpg"
        
        
        <div>
            <p style={{color:"blue"}}>
                {`hola autor, soy el escritor de esta entrada: ${autor}`}</p>

                <img src={goku} alt="imagen"></img>
        </div>*/