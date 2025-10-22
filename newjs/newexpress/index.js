import express from 'express'
import posts from './routes/routes.js'
const PORT = process.env.PORT ||3000

const app = express()
app.use('/api/users/',posts)
app.use('',posts)
app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))