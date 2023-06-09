import express from 'express'
import {createWorkout} from '../controllers/WorkoutControllers.js'

const router = express.Router()


// GET all workouts
router.get('/',(req,res)=>{
    res.json({message:"get all workouts"})
})


//GET a single workout
router.get('/:id',(req,res)=>{
    res.json({message:"GET a single workout"})
})

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