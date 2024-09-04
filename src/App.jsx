import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from '../components/Login'
import Graphform from '../components/Graphform'
import GraphListing from '../components/GraphListing'
import Viewgraph from '../components/Viewgraph'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Login/> */}
    {/* <Graphform/> */}
    <GraphListing/>
    {/* <Viewgraph/> */}
    </>
  )
}

export default App
