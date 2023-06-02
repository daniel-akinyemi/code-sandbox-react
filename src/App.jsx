import { useState, useEffect } from 'react'
import Axios from 'axios'

const App = () => {

  const [name,setName] = useState('')
  const [result,setResult] = useState(null)

  const fetchData =()=>{
    
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>setResult(res.data))
  
  }

  useEffect(()=>{
    fetchData()
  },[])
  

  return (
    <div className='mx-auto space-y-4 mt-10 flex justify-center items-center flex-col'>
      <input placeholder='Pedro' className='border-2 rounded-md px-4' onChange={(e)=> {setName(e.target.value)}}/>
      <button onClick={fetchData} className='bg-gray-700 rounded-md px-4 py-2 text-white'>Predict Age</button>
      <h1 className='my-8 text-4xl font-bold'>{result?.age}</h1>
    </div>
  )
}

export default App