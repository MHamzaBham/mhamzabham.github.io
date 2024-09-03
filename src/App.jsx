import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Coming Soon...</h1>
      <div className="card">
        <a href="https://www.linkedin.com/in/hamzabham/" target='_blank'>
          <button>
            Go to my linkedin
          </button>
        </a>
      </div>
    </>
  )
}

export default App
