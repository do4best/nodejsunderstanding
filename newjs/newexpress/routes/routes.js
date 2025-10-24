import express from 'express'
const route = express.Router();
import path from 'path'
import  url  from 'url'
const __fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)
let users = [
    {id:1,title:"do4best"},
    {id:2,title:"do4best2"},
    {id:3,title:"do4best3"},

]


// route.get('/home',(req,res)=>{
// res.sendFile(path.join(__dirname,'../public','home.html'))
// })
// route.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../public','about.html'))
// })


 route.get('/',(req,res)=>{
    const rawLimit = req.query.limit;
    
    const limit = parseInt(rawLimit,10)
    if(!isNaN(limit) && limit>0){
      return  res.status(200).json(users.slice(0,limit));
    }else{
       return res.status(200).json(users)
    }})
    

 route.get('/:id',(req,res)=>{
    let id = parseInt(req.params.id,10)
    if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' })
    const post = users.find((post)=>post.id === id)

    if(!post){
        res.status(404).json({error:`Sorry ${post} is not found`})
    }else{
       return  res.status(200).json(post)
    }
        
    
 })
 route.post('/',(req,res)=>{
const newPost = {
    id:users.length + 1,
    title:req.body.title
};
if(!newPost.title){
    return res.status(400).json({msg:"Please include the title"})
}
users.push(newPost)
    res.status(201).json(users)
 })
 route.put('/:id',(req,res)=>{
const id = parseInt(req.params.id)
const post = users.find((post)=>post.id === id)
if(!post){
    return res.status(404).json({msg:`a user with the ${id} is not found`})
}
post.title = req.body.title;
res.status(200).json(users)
 })
route.delete('/:id',(req,res)=>{
let id = parseInt(req.params.id)
let post = users.find((post)=>post.id === id)
if(!post){
    return res.status(404).json({msg:`a user with the ${id} is not found`})
}
users = users.filter((post)=>post.id !== id)
res.status(200).json(users)
 })
 export default route;