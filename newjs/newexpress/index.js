import express from 'express'
import path from 'path'
import  url  from 'url'
const __fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)

const PORT = process.env.PORT ||3000
const app = express()
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'public','home.html'))
})
app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))