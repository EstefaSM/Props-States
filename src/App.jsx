import './App.css';
import Contacts from './components/Contacts';
import { useState } from 'react';

function App() {
        //La primera será la inicializadora (valor predeterminado) y la segunda la modificadora con la palabra reservada "set"
  const [stateContacts, setStateContacts] = useState(false);

  const state = () => {
      console.log("Funcionando")
      var color = document.getElementById("color")
      setStateContacts(!stateContacts);
      if(stateContacts == true){
        color.style.color="red";
      }else{
        color.style.color="green";
      }
    }
  return (
    <div className="App">
      <Contacts name="Estefa" description="Inserte estado de WhatsApp"/>
      <h2 id='color'>Status: {stateContacts ? "Online": "Offline"}</h2>
      <button onClick={state}>Confirmar</button>
    </div>
  );
}

export default App;
