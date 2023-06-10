import Workout from "../models/Workouts.js";


const getWorkouts = async (req,res)=>{ 
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}


const getWorkout = async (req,res) => {
    try{ 
        const {id} = req.params

    const workout = await Workout.findById(id)
    if (!workout){
        return res.status(404).json({Error: "This workout cannot be found"})
    }
    res.status(200).json(workout)

    }catch(err){
        console.log({error: err.message})
    }
    
}


const createWorkout = async (req,res)=>{
    const{title,load,reps} = req.body
    try{
        const workout  = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

export {createWorkout}