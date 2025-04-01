import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        hello
        {/* <Button>hello</Button> */}
        <button>hello</button>
        <Button>hello</Button>
      </div>
    </>
  )
}

export default App
