import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'> 

   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
        </Route>
      </Routes>
   </BrowserRouter>

   </div>
  )
}

export default App
