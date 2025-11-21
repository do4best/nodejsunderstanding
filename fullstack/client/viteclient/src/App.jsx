import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [message, setMessage] = useState("")
  useEffect(()=>{
 fetch("http://localhost:4000/api/messages").then((res)=>res.json()).then((data)=>setMessage(data.message))
  },[])

  return (
    <>
     <h1>Welcome to Front End </h1>
     <h1>{message}</h1>
    </>
  )
}

export default App
