import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="count"><h1>{count}</h1></div>
    <button onClick={() => {setCount(count + 1)}}>+</button>
    <button onClick={() => {count === 0 ? {} : setCount(count - 1)}}>-</button>
    </>
  )
}

export default App
