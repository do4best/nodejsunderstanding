import http from 'http'
const PORT = 8000;

const server = http.createServer((req,res)=>{
    res.write("Hello Friend")
    res.end()
});
server.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})