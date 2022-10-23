import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [text,setText] = useState('Macro')
  const [state, setState] = useState(true)
  
  const handleClick = () => {
    if(state === true){
      setState(false)
      setText('Polo')
    }
    else {
       setState(true)
       setText('Macro')
    }
      
  }

  return (
    <div id="main">
      { state === true ? <h1 id="marco-polo">{text}</h1> : <h1 id="marco-polo">{text}</h1>}
      <button id="marco-polo-toggler" onClick={handleClick}>{state === true ? 'Polo' : 'Macro'}</button>
    </div>
  )
}


export default App;
