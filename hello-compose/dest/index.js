const net = require('net')

const host = process.env.HOST || 'localhost'
const port = Number(process.env.PORT || 7878)
const config = { host, port }

console.log(`Creating TCP server`, config, '...')
const server = net.createServer(socket => {
  // socket.on('data', function (data) {
  //   console.log(`Received data:`)
  //   console.log(data.toString())
  //   // socket.end()
  // })
  // console.log(`Someone connected...`)
})

server.on('connection', function (socket) {
  console.log('A new connection has been established.')

  // Now that a TCP connection has been established, the server can send data to
  // the client by writing to its socket.
  socket.write('Hello, client.')

  // The server can also receive data from the client by reading from its socket.
  socket.on('data', function (chunk) {
    console.log(`Data received from client: ${chunk.toString()}`)
  })

  // When the client requests to end the TCP connection with the server, the server
  // ends the connection.
  socket.on('end', function () {
    console.log('Closing connection with the client')
  })

  // Don't forget to catch error, for your own sake.
  socket.on('error', function (err) {
    console.log(`Error: ${err}`)
  })
})

server.listen(config, () => {
  console.log(`Server listening on 7878`)
})
