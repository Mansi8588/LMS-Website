import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'



// Initialize Express
const app=express()


// connect to dadatbase
await connectDB()

// Middleware 
app.use(cors())


//Routes
app.get('/',(req,res)=> res.send("API Working"))
app.post('/clerk',express.json(),clerkWebhooks)

// Port
const PORT=process.env.PORT|| 5000

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})