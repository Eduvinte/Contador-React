import React from 'react';
import '../stylesheet/boton.css';

//Desetructuración recibir valor por parametros
export default function Boton( { texto, esBotonDeClic, manejarClic } ){
    return (
        //Operador ternario
        <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={ manejarClic }> 
        { texto }     
        </button>
    );
}   