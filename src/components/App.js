import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [state, setState] = useState(true)
  
  const handleClick = () => {
    if(state === true){
      setState(false)
    }
    else {
       setState(true)
    }
      
  }

  return (
    <div id="main">
      { state === true ? <h1 id="marco-polo">Macro</h1> : <h1 id="marco-polo">Polo</h1>}
      <button id="marco-polo-toggler" onClick={handleClick}>{state === true ? Polo : Macro}</button>
    </div>
  )
}


export default App;
