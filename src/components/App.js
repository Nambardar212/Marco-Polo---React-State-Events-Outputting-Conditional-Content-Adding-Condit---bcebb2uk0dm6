import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [state, setState] = useState(true);

  const handle = ()=>{
    setState(!state);
  }
  return (
    <div id="main">
      <h1 id="marco-polo">{state ? "Marco" : "Polo"}</h1>
      <button id="marco-polo-toggler" onClick={()=>handle()}>{(!state) ? "Marco":"Polo"}</button>
    </div>
  )
}


export default App;
