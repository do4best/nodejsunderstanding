import {createServer} from 'http'
const PORT = process.env.PORT || 6000
const users =[
    {id:1,user:'do4best'},
    {id:2,user:'raviScientific'},
    {id:3,user:'idealScientific'}
];

const server = createServer((req,res)=>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users))
        res.end()
        
            }
})
server.listen(PORT,()=>(
    console.log(`Server is listening on ${PORT}`)
))  