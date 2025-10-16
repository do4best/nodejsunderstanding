import http from 'http'
const port=process.env.PORT;
const server = http.createServer((req,res)=>{
   try{
if(req.method === 'GET'){
    if(req.url === '/'){
    res.writeHead(400,{'content-type':'text/html'})
   res.end("<h1>Hello Friend</h1>")
   
   }else if(req.url === '/about'){
        res.writeHead(400,{'content-type':'text/html'})
   res.end("<h1>This is About Page</h1>")
   
    }else {
        res.writeHead(404,{'content-type':'text/html'})
   res.end("<h1>No Page Found</h1>")
   
    }
} else {
    throw new Error('Nothing Found')
}
   }catch(error){
   res.writeHead(500,{'content-type':'text/plain'})
   res.end("Internal Error")
   
   }
   })
   



server.listen(port,()=>{
    console.log(`The server is running on Port ${port}`)
})
