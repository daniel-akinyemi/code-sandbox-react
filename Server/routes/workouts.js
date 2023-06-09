import express from 'express'
import Workouts from '../models/Workouts.js'

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
router.post('/',async (req,res)=>{
    const {title,load,reps} = req.body
    try{
        const workout = await Workouts.create({title,load,reps})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({error: error.message})
    }
})


//DELETE a new workout
router.delete('/:id',(req,res)=>{
    res.json({message: "DELETE a new workout"})
})


//UPDATE a new workout
router.patch('/:id',(req,res)=>{
    res.json({message: "UPDATE a new workout"})
})

export default router