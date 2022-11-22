import './App.css';
import logo from './imagenes/LOGO-CONTADOR-CLICKS.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';


function App() {

  const reiniciar = 0;
  const [numDeClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numDeClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(reiniciar);
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img src={logo} className="logo" alt="logo-contador-de-clicks" />
      </div>
      <div className="contenedor-principal">

      <Contador numDeClics={numDeClics} />

        <Boton 
          texto='Clic'
          esBotonDeClic={ true }
          manejarClic ={ manejarClic }
        />

        <Boton 
          texto="Reiniciar"
          esBotonDeClic={ false }
          manejarClic={ reiniciarContador }
        />

      </div>
    </div>
  );
}

export default App;
