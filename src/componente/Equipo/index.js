import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    //Destructuracion 
    const { titulo, colorPrimario, colorSecundario, } = props.datos;
    const {colaboradores, eliminarColab} = props;

    const formato = {
        backgroundColor: colorSecundario
    }    

    console.log(colaboradores.length > 0);

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>{colaboradores.length > 0 &&
                <section className="equipo" style={formato}>
                    <h3 style={estiloTitulo}> {titulo} </h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map( (colaborador, index) => 
                                <Colaborador
                                    datos={colaborador} 
                                    key={index}
                                    colorPrimario={colorPrimario} 
                                    eliminarColab={eliminarColab}
                                /> )
                        }               
                    </div>
                </section>}
            </>
}

export default Equipo;

//https://github.com/KaozD.png