import { useState } from 'react'
import Login from './pages/Login'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <div>header</div>
    </>
  )
}

export default App
