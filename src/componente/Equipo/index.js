import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    //Destructuracion 
    const { titulo, colorPrimario, colorSecundario} = props.datos;

    const formato = {
        backgroundColor: colorSecundario
    }    

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={formato}>
        <h3 style={estiloTitulo}> {titulo} </h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            
        </div>
    </section>
}

export default Equipo;