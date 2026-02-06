import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainSection from "./assets/components/MainSection"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
          <div className="row">
              <div className="col-lg-4 mx-auto">
                <MainSection />
              </div>
          </div>
      </main>
    </>
  )
}

export default App
