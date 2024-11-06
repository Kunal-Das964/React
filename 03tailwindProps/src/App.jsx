import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)
  // const myObj = {
  //   username : "kunal",
  //   age: 21
  // }
  // const myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-2 text-center text-blue-400 mb-4'>Tailwind Test</h1>
      <Card username="kunal" btnText="about us" />
      <Card username="das"  />
    </>
  )
}

export default App
