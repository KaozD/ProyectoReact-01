import { useState }  from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualizar] = useState(valorInicial) 

    console.log(props);
    
    /*
    const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar)
    }
    */

    return <section className="orgSection">
        <h3 className="title"> Mi Organización </h3>
        <img src="/img/agregar.png" alt="Agregar" className="iconoAdd" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg