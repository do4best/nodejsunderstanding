// ...existing code...
import http from 'http'
import fs from 'fs/promises'
const port = process.env.PORT || 6000;
import url from 'url';
import path from 'path';
const __fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)

const server = http.createServer(async (req, res) => {
  try {//this start of try
    if (req.method === 'GET') { // if request is "GET"
      let filepath = "";
      if (req.url === '/') {
        filepath = path.join(__dirname, 'public', 'home.html')
      } else if (req.url === '/about') {
        filepath = path.join(__dirname, 'public', 'about.html')
      } else {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end('Not Found')
        return
      }

      const data = await fs.readFile(filepath)
      res.setHeader('Content-Type', 'text/html')
      res.write(data)
      res.end()
      console.log('find it', filepath)
    } else {
      res.writeHead(405, { 'content-type': 'text/plain' })
      res.end('Method Not Allowed')
    }
  } catch (error) {
    console.error(error)
    res.writeHead(500, { 'content-type': 'text/plain' })
    res.end('There is an error')
  }
})

server.listen(port, () => {
  console.log(`The server is running on Port ${port}`)
})
// ...existing code...