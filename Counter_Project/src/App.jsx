import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  const valueadd = document.querySelector('#addValue');
  const valueremove = document.querySelector('#removeValue');



  const addValue = () => {
    if (counter === 20) {
      valueadd.ariaDisabled
    }
    else { 
      //counter = counter + 1;
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }

  }
  
  const removeValue = () => { 
    if (counter === 0) {
      valueremove.ariaDisabled
    }
    else { 
      setCounter(counter - 1)
    }
  
  }

  return (
    <>
      <h1>Counter React Project</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={addValue} id='addValue'>Add Value</button>
      <br />
      <button onClick={removeValue} id='removeValue'>Remove Value</button>
    </>
  )
}

export default App
