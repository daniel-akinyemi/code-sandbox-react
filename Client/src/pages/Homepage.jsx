import { useState } from "react"

const Homepage = () => {

  const [title,setTitle] = useState('')
  const [reps,setReps] = useState('')
  const [load,setLoad] = useState('')

  const handleSubmit = async (e)=>{
      e.preventDefault()
      const workout = {title,load,reps}
      const res = await fetch("http://localhost:3001/api/workouts",{
        method:'POST',
        body: JSON.stringify(workout),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const json = await res.json()

      if(res.ok){
        console.log("Added successfully")
        setLoad('')
        setReps('')
        setTitle('')
      }
      else{
        console.log(json.error)
      }
  }


  return (
    <div className='flex space-x-4 justify-center'>
      <div className='w-[45%] bg-gray-100 mx-4 px-8 py-4 my-8'>aa</div>
      <div className='w-[45%]  mx-4 my-8 drop-shadow-sm border-2 px-8 py-8'>
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input type="text" placeholder='Title' id='title' className='border-[1px] border-stone-400 rounded-lg px-2'
          onChange={(e)=>{setTitle(e.target.value)}}
          value={title}
          />

          <label htmlFor='reps'>Reps</label>
          <input type="number" placeholder='Reps' id='reps' className='border-[1px] border-stone-400 rounded-lg px-2'
          onChange={(e)=>{setReps(e.target.value)}}
          value={reps}
          />

          <label htmlFor='load'>Load</label>
          <input type="number" placeholder='Load' id='load' className='border-[1px] border-stone-400 rounded-lg px-2 mb-8'
          onChange={(e)=>{setLoad(e.target.value)}}
          value={load}
          />                    
          <button className='bg-green-400 text-white rounded-lg py-2'>Submit Workout</button>
        </form>
      </div>
    </div>
  )
}

export default Homepage