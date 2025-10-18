import express from 'express'
import path from 'path'
import  url  from 'url'
const __fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)
const users = [
    {id:1,name:"do4best"},
    {id:2,name:"do4best2"},
    {id:3,name:"do4best3"},

]
const PORT = process.env.PORT ||3000
const app = express()
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'public','home.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'))
})
 app.get('/api/user',(req,res)=>{
    res.json(users)
 })
app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))