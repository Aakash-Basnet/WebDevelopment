import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hello from './Hello'
import Bye from './Bye'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hello />
     <Bye />
    </>
  )
}

export default App
