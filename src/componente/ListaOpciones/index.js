import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    /* 
    Metodo map -> arrgelo.map ((equipo) => {
        return <option> </option>
    })
    */

    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Movil",
        "Innovación y Gestión",
    ];

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
           { equipos.map( (equipo, index) => 
                 <option key={index} value={equipo} > {equipo} </option> ) }
        </select>
    </div>
}

export default ListaOpciones;