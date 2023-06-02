import { useState, useEffect } from 'react'
import Axios from 'axios'

const App = () => {

  const [catFact,setCatFact] = useState('')

  const fetchCatFact =()=>{
    Axios.get('https://catfact.ninja/fact').then((res)=>setCatFact(res.data))
  
  }

  useEffect(()=>{
  },[])
  

  return (
    <div className='mx-auto space-y-4 mt-10 flex justify-center items-center flex-col'>
      <button className='py-2 px-4 bg-gray-700 text-white' onClick={fetchCatFact}>Get API Data</button>
      <div className='text-black p-8 w-96 h-48 border-2 border-black rounded-md'>{catFact.fact}</div>
    </div>
  )
}

export default App