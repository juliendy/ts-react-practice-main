import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

  function App() {
    const [colour, setColour] = useState();

    useEffect(() => {
      // TODO: generate a random colour
    })
    
   return <div className="App">
      <div className='guess-me'></div>
    </div>
  
}

export default App
 