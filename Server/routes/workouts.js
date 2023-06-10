import express from 'express'
import {createWorkout,getWorkout,getWorkouts} from '../controllers/WorkoutControllers.js'

const router = express.Router()


// GET all workouts
router.get('/', getWorkouts)


//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)


//DELETE a new workout
router.delete('/:id',(req,res)=>{
    res.json({message: "DELETE a new workout"})
})


//UPDATE a new workout
router.patch('/:id',(req,res)=>{
    res.json({message: "UPDATE a new workout"})
})

export default router