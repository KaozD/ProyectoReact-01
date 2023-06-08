
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

  return (    
    <div >      

      <Header />

      { mostrarFormulario === true ? <Formulario /> : <> </> }
      { /*mostrarFormulario && <Formulario />*/ }
       
      <MiOrg cambiarMostrar = {cambiarMostrar}  />
      <Equipo equipo="Programación" />
      <Equipo equipo="Front End" />
      <Equipo equipo="Data Science" />
      <Equipo equipo="Dev Ops" />
      <Equipo equipo="UX y Diseño" />
      <Equipo equipo="Móvil" />
      <Equipo equipo="Innovación y Gestión" />
      
    </div>
  );
}

export default App;
