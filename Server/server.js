import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import workoutroutes from './routes/workouts.js'


const app = express()

//middlewares
app.use(cors())
app.use(express.json())


//routes
app.use('/api/workouts',workoutroutes)

mongoose.connect("mongodb+srv://darnzykay:Plmokn111...@cluster0.it07zxg.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(3001,()=>console.log("DB CONNECTED & SERVER STARTED"))
})
.catch((err)=>{
    console.log(err)
})