import { useState } from "react";
import TelaInicial from "./components/TelaInicial";
import TelaJogo from "./components/TelaJogo";
import "./App.css"

function App(){
  const [jogoIniciado, setJogoIniciado] = useState(false)

  function iniciarJogo(){
    setJogoIniciado(true)
  }

  return(
    <div>
      {jogoIniciado ? (<TelaJogo />):(<TelaInicial aoJogar={iniciarJogo}/>)}
    </div>

  )
}
export default App