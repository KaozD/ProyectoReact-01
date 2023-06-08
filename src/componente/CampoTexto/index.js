import { useState } from "react";
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const [ valor, actualizarValor ] = useState ("Carlos")
    console.log("Datos", props)

    const placeholderMod = `${props.placeholder}...`;
    return <div className = "campo-texto">
        <label>{props.titulo}</label>
        <input placeholder = {placeholderMod} required ={props.required} value="valor del imput "/>

    </div>
    
};

export default CampoTexto;