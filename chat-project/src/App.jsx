import { useState } from 'react'
import Login from './pages/Login'
import Chat from './pages/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <Chat/>
    </>
  )
}

export default App
