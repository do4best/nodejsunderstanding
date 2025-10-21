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
const posts = [
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


 app.get('/api/posts/',(req,res)=>{
    const id = parseInt(req.query.limit)
    if(!isNaN(id) && id>0){
        res.json(posts.slice(0,id));
    }else{
        res.json(posts)
    }
 })
 app.get('/api/users/:id',(req,res)=>{
    console.log(req.params.id)
    
    res.json(users)
 })

app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))