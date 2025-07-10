import React from 'react'
import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'
function App() {
  

  return (
    <>


<NavBar></NavBar>

{/* <DaisyNav></DaisyNav> */}


      <h1 className='bg-amber-300'>Vite + React</h1>

<PriceOptions></PriceOptions>
<LineChart></LineChart>
<Phones></Phones>


    </>
  )
}

export default App
