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
       { <h1 id="marco-polo">{state === true ? "Marco": "Polo"}</h1>}
      {<button id="marco-polo-toggler" onClick={handleClick}>{state === true ? 'Polo' : 'Macro'}</button>}
    </div>
  )
}


export default App;
