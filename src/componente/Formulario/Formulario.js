import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {

    const manejarEnvio = (e) => {
         e.preventDefault();
         console.log("manejar el envio", e);
       
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder = "Ingresar el nombre" />
            <CampoTexto titulo="Puesto" placeholder = "Ingresa el puesto" />
            <CampoTexto titulo="Foto" placeholder = "Ingresar enlace de foto" />
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>              
        </form>
    </section>
}

export default Formulario;