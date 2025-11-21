const express = require('express')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
app.get("/api/messages",(req,res)=>res.json({message:"Hello Friend"}));
const Port=4000;
app.listen(Port,(req,res)=>{
    console.log(`server is running at Port ${Port}`);
  
})
