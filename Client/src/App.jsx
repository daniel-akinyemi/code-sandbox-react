import { useState, useEffect } from 'react'
import Axios from 'axios'

const App = () => {

  const [result,setResult] = useState(null)

  const fetchData =(name)=>{
    
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}`).then((res)=>setResult(res.data))
  
  }

useEffect(() => {
  fetchData()
},[])
  

  return (
    <div className='mx-auto w-3/4 space-y-4 mt-10 flex justify-center items-center flex-col'>
      <button className='bg-gray-800 rounded-md text-white px-4 py-2' onClick={fetchData('party')}>Party</button>

      <button className='bg-gray-800 rounded-md text-white px-4 py-2' onClick={fetchData('family')}>Family</button>

      <button className='bg-gray-800 rounded-md text-white px-4 py-2' onClick={fetchData('office')}>Office</button>

      <div className='text-4xl font-bold my-8'>{result[0]?.excuse}</div>
    </div>
  )
}

export default App