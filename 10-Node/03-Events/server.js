// Basic Server without framework

const http = require('http')

const handleRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end("Welcome to node Training \n")
}

const server = http.createServer(handleRequest)

server.listen(3000, 'localhost')
