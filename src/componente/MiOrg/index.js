import { useState }  from "react"
import "./MiOrg.css"

const MiOrg = () => {

    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualizar] = useState(valorInicial) 
    
    const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title"> Mi Organización </h3>
        <img src="/img/agregar.png" alt="Agregar" className="iconoAdd" onClick={manejarClick} />
    </section>
}

export default MiOrg