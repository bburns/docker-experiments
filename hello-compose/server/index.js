const net = require('net')

const host = process.env.HOST || 'localhost'
const port = Number(process.env.PORT || 7878)
const config = { host, port }

console.log(`Creating TCP server`, config, '...')
const server = net.createServer()

server.on('connection', function (socket) {
  console.log('A new connection has been established.')

  // send data to client on the socket
  socket.write('Hello, client.')

  // receive data from client on the socket
  socket.on('data', function (chunk) {
    console.log(`Data received from client: ${chunk.toString()}`)
  })

  // When the client requests to end the TCP connection with the server, the server
  // ends the connection.
  //. nowork?
  socket.on('end', function () {
    console.log('Closing connection with the client')
  })

  // catch any errors
  socket.on('error', function (err) {
    console.log(`Error: ${err}`)
  })
})

server.listen(config, () => {
  console.log(`Server listening on`, config)
})
