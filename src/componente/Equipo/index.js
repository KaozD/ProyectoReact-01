import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';


const Equipo = ( props ) => {

    //Destructuracion 
    const { titulo, colorPrimario, colorSecundario, } = props.datos;
    const { colaboradores, eliminarColab, actualizarColor } = props;

    const formato = { backgroundColor: hexToRgba( colorPrimario, 0.5 ) }    
    
    const estiloTitulo = { borderColor: colorPrimario }

    return <>
            { colaboradores.length > 0 &&
                <section className="equipo" style={ formato }>
                    <input 
                        type="color"
                        className="input-Color"
                        value={ hexToRgba( colorPrimario, 0.6 ) }
                        onChange={ ( evento ) => { actualizarColor(evento.target.value, titulo) } }
                    />
                    <h3 style={estiloTitulo}> {titulo} </h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map( (colaborador, index) => 
                                <Colaborador
                                    datos={ colaborador } 
                                    key={ index }
                                    colorPrimario={ colorPrimario } 
                                    eliminarColab={ eliminarColab }
                                /> )
                        }               
                    </div>
                </section>}
            </>
}

export default Equipo;

//https://github.com/KaozD.png