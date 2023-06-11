import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';


const Equipo = ( props ) => {

    //Destructuracion 
    const { titulo, colorPrimario, colorSecundario, id } = props.datos;
    const { colaboradores, eliminarColab, actualizarColor, like } = props;

    const formato = { backgroundColor: hexToRgba( colorPrimario, 0.5 ) }    
    
    const estiloTitulo = { borderColor: colorPrimario }

    return <>
            { colaboradores.length > 0 &&
                <section className="equipo" style={ formato }>
                    <input 
                        type="color"
                        className="input-Color"
                        value={ colorPrimario }
                        onChange={ ( evento ) => { actualizarColor(evento.target.value, id) } }
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
                                    like={ like }
                                /> )
                        }               
                    </div>
                </section>}
            </>
}

export default Equipo;

//https://github.com/KaozD.png