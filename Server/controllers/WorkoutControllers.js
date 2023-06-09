import Workouts from "../models/Workouts";

const createWorkout = async (req,res)=>{
    const{title,load,reps} = req.body
    try{
        const workout = await Workouts.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

export default {createWorkout}