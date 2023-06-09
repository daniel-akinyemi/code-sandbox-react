import express from 'express'
import {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} from '../controllers/WorkoutControllers.js'

const router = express.Router()


// GET all workouts
router.get('/', getWorkouts)


//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)


//DELETE a new workout
router.delete('/:id',deleteWorkout)


//UPDATE a new workout
router.patch('/:id',updateWorkout)

export default router