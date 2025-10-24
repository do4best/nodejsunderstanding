import express from 'express'
import users from './routes/routes.js'
import logger from './middleware/logger.js'

const PORT = process.env.PORT ||3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use('',posts)
app.use(logger)
app.use('/api/users/',users)




app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))