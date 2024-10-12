import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Quick Cards
      </div>
      <PWABadge />
    </>
  )
}

export default App
