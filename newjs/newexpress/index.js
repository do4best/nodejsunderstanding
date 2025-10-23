import express from 'express'
import posts from './routes/routes.js'
import users from './routes/routes.js'
const PORT = process.env.PORT ||3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use('/api/users/',users)
app.use('api/posts',posts)
app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))