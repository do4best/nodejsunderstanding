import express from 'express'
import users from './routes/routes.js'

const PORT = process.env.PORT ||3000

const app = express()
// app.use(express.json())
// app.use('',posts)
app.use('/api/users',users)



app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))