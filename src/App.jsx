import React, { useState } from 'react';
import './App.css';

function App() {
  const black = "yellow"
  const [bg, setBg] = useState(black)
  const [name, setName] = useState('Click Me')
  const bgChange = () => {
    console.log("change");
    let newBg = "pink"
    setBg(newBg)
    setName("Ouch!! 😸")
  }
  const bgBack = () =>{
    setBg("yellow")
    setName("Ayyo! 😠")
  }


  return (
    <div className="App" style={{background: bg}}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
    </div>
  );
}

export default App;
