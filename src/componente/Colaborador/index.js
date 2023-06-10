import "./Colaborador.css"
import { RiCloseCircleFill } from "react-icons/ri"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo } = props.datos;
    const {colorPrimario, eliminarColab} = props;

    return <div className="colaborador" >
        <RiCloseCircleFill className="eliminar" onClick={eliminarColab} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>            
        </div>
    </div>
}

export default Colaborador;