
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componente/Header/header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from './componente/MiOrg';
import Equipo from './componente/Equipo';
import Footer from './componente/Footer';


function App() {

  const [ mostrarFormulario, actualizarMostrar ] = useState(false);

  const [ colaboradores, actualizarColab ] =  useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/KaozD.png",
      nombre: "Laura Prados",
      puesto: "Isntructora"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/KaozD.png",
      nombre: "Carlos Aguilar",
      puesto: "Programador"
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/KaozD.png",
      nombre: "Raul Mendoza",
      puesto: "Instrucor en One"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/KaozD.png",
      nombre: "Yareli Fonseca",
      puesto: "Head de One"
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/KaozD.png",
      nombre: "Jose Romero",
      puesto: "Dev Fullstack"
    }
  ]); 

  const [ equipos, actualizarEquipos ]  = useState ([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      id: uuid(),
      titulo: "Dev Ops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#dd8a29",
      colorSecundario: "#ffeedf"
    }
  ]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
      actualizarMostrar( !mostrarFormulario );
  }

  //Registrar Colaborador
  const registarColab = ( colaborador ) =>{
    console.log( "Nuevo colaborador", colaborador );    
    actualizarColab( [ ...colaboradores, colaborador ] );
  }

  //Eliminar Registro
  const eliminarColab = (id) => {
    console.log( "Eliminar Colaborador", id );
    const nuevosColab = colaboradores.filter((colaborador) => colaborador.id !== id );
    actualizarColab(nuevosColab);
  }

  //Actualizar color de equipo
  const actualizarColor = ( color, id ) => { 
    console.log( "Actualizar : ", color, id )
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    })

    actualizarEquipos(equiposActualizados);
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos( [...equipos, { ...nuevoEquipo, id: uuid() } ] )
  }
 
  return (    
    <div >      

      <Header />

      { mostrarFormulario ? <Formulario 
          equipos={equipos.map( ( equipo ) => equipo.titulo )} 
          registrarColab={ registarColab }  
          crearEquipo={ crearEquipo }
        /> : <> </>         
      }
             
      <MiOrg cambiarMostrar = { cambiarMostrar }  />
      
      {
        equipos.map( ( equipo ) => <Equipo 
          datos={ equipo } 
          key={ equipo.titulo }
          colaboradores={ colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
          eliminarColab={ eliminarColab }
          actualizarColor={ actualizarColor }
          /> )        
      }

      <Footer />   
      
    </div>
  );
}

export default App;

/* 
Otra forma de codificar la terna
  mostrarFormulario && <Formulario />  
*/ 

/*
  () => { return (argumento)} es una forma comun de usar arrow funtions, pero si uno sabe lo que 
  devolvera el argumento, se pueden omitir tanto las {} como el return dentro de ellas, 
  quedando asi  () => argumento  de esta forma el codigo es mas limpio.    
*/

/*
Spread operator
  Es usado para poder copiar infomacion ya existente, 
  se puede identificar por estar precedida la variable por puntos suspencivos
  de la siguiente forma  ...Var  y seguido de otra variable que sera la que se agregue
  quedando asi  ...Var, AddVar todo dentro de un arreglo ya existente
*/

/*
  .filter nos regresar un nuevo arreglos sin modificar el original
*/