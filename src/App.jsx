import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = ()=>{
    if(counter >= 20){
      setCounter(0)
    }
    else{
      setCounter(counter + 1);  
    }
  }

  const removeValue = ()=>{
    if(counter <= 0){
      setCounter(20);
    }
    else{
      setCounter(counter - 1);
    }
  }

  return (
    
    <>
    <h1>HELLO WORLD</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App;
