
import { useState } from 'react';
import './App.css';
import Header from './componente/Header/header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from './componente/MiOrg';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

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
      
    </div>
  );
}

export default App;
