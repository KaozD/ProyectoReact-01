import "./ListaOpciones.css"

const ListaOpciones = () => {

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

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
           { equipos.map( (equipo, index) => 
                 <option key={index} > {equipo} </option> ) }
        </select>
    </div>
}

export default ListaOpciones;