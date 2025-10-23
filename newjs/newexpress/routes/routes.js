import express from 'express'
const route = express.Router();
import path from 'path'
import  url  from 'url'
const __fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)
const users = [
    {id:1,title:"do4best"},
    {id:2,title:"do4best2"},
    {id:3,title:"do4best3"},

]
const posts = [
    {id:1,name:"do4best"},
    {id:2,name:"do4best2"},
    {id:3,name:"do4best3"},

]

route.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'../public','home.html'))
})
route.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','about.html'))
})


 route.get('/',(req,res)=>{
    const id = parseInt(req.query.limit)
    if(!isNaN(id) && id>0){
        res.json(posts.slice(0,id));
    }else{
        res.json(posts)
    }
    
 })
 route.get('/:id',(req,res)=>{
    let id = parseInt(req.params.id)
    const post = posts.find((post)=>post.id === id)

    if(!post){
        res.status(404).json({error:`Sorry ${post} is not found`})
    }else{
        res.status(200).json(posts)
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
const post = posts.find((post)=>post.id === id)
if(!post){
    return res.status(404).json({msg:`a user with the ${id} is not found`})
}
post.title = req.body.title;
res.status(200).json(posts)
 })
route.delete('/:id',(req,res)=>{
const id = parseInt(req.params.id)
let post = posts.find((post)=>post.id === id)
if(!post){
    return res.status(404).json({msg:`a user with the ${id} is not found`})
}
posts = posts.filter((post)=>post.id !== id)
res.status(200).json(posts)
 })
 export default route;