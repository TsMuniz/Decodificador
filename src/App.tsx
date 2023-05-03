import { useState } from 'react'
import MainPage from './pages/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Main_container'>
      <MainPage/>
    </div>
  )
}

export default App
