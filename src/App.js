
import { useState } from 'react';
import './App.css';
import Header from './componente/Header/header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from './componente/MiOrg';
import Equipo from './componente/Equipo';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra


  const cambiarMostrar = () => {
      actualizarMostrar(!mostrarFormulario)
  }

  //Lista de Equipos

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      titulo: "Dev Ops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#dd8a29",
      colorSecundario: "#ffeedf"
    },
  ];

  return (    
    <div >      

      <Header />

      { mostrarFormulario === true ? <Formulario /> : <> </> }
      { /*mostrarFormulario && <Formulario />*/ }
       
      <MiOrg cambiarMostrar = {cambiarMostrar}  />
      
      {
        equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} /> )

        /*
          () => { return (argumento)} es una forma comun de usar arrow funtions, pero si uno sabe lo que 
          devolvera el argumento, se pueden omitir tanto las {} como el return dentro de ellas, 
          quedando asi  () => argumento  de esta forma el codigo es mas limpio.    
        */
      }   
      
    </div>
  );
}

export default App;
