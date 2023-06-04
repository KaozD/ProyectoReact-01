
import { useState } from "react";
import './App.css';
import Header from './componente/Header/header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from './componente/MiOrg';


function App() {
  const [mostrarFormulario, actualzarMostrar] = useState(true);

  //Ternario --> condicion ? seMuestra : noSeMuestra

  return (    
    <div >      
      <Header />

      { mostrarFormulario === true ? <Formulario /> : <div></div> }


      
      <MiOrg />

      
    </div>
  );
}

export default App;
