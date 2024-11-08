import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(10)

  /*const addValue=() => {
       if(count == 20){
         alert("Counter value not exceed 20")
       }else{
         setCount(count + 1)
       }
   }*/
  
  /*const addValue=() => {
       if(count == 20){
         alert("Counter value not exceed 20")
       }else{
         setCount(count + 1)
         setCount(count + 1)
         setCount(count + 1)
         setCount(count + 1)
         setCount(count + 1)
       }
   }*/

  const addValue = () => {
    if (count == 200) {
      alert("Counter value not exceed 200")
    } else {
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (count == 0) {
      alert("Counter value not accepts negative value")
    } else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Counter Project Using Hooks</h1>
      <h2>Counter : {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
