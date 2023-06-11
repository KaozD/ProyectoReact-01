import "./Colaborador.css"
import { RiCloseCircleFill } from "react-icons/ri"
import { BsBookmarkHeartFill, BsBookmarkHeart } from "react-icons/bs"

const Colaborador = ( props ) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const { colorPrimario, eliminarColab, like } = props;

    //condicion ? Verdadero : falso

    return <div className="colaborador" >
        <RiCloseCircleFill className="eliminar" onClick={ () => eliminarColab( id ) } />
        <div className="encabezado" style={ { backgroundColor: colorPrimario } }>
            <img src={ foto } alt={ nombre }></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5> 

            { fav ? <BsBookmarkHeartFill color="red" onClick={ () => like( id )} />
             : <BsBookmarkHeart onClick={ () => like ( id )}/> }         
                    
        </div>
    </div>
}

export default Colaborador;