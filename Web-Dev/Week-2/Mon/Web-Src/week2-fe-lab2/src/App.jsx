import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Bye() {
  return <p>Goodbye, React!</p>;
}
 {function Hello() {
  return <p>Hello, React!</p>;
}

  return (
    <>
    <Hello />
    <Bye />
    </>
  )
}
}
export default App;
