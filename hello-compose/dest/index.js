const net = require('net')

// const host = process.env.HOST || 'localhost'
// const port = Number(process.env.PORT || 7878)
// const config = { host, port }

console.log(`Creating TCP server`)

const server = net.createServer(socket => {
  socket.on('data', function (data) {
    console.log(`Received data:`)
    console.log(data.toString())
  })

  console.log(`Someone connected...`)
  console.log(`Sending text...`)

  socket.write(`Hello, world!\n`)

  const buffer = Buffer.from('pokpok\n')
  socket.write(buffer)

  console.log(`Ending socket...`)
  socket.end()

  // net.connect(config, () => {
  //   // If there is no error, the server has accepted the request and created a new
  //   // socket dedicated to us.
  //   console.log('TCP connection established with the server.')
  //   // The client can now send data to the server by writing to its socket.
  //   // client.write('Hello, server.');
  // })

  // console.log(`Sending SHDR to diode over TCP at`, config.diodeSender, `...`)
  // const str = 'oijoij'
  // socket.write(str)
  // console.log(`Closing TCP...`)
})

server.listen(7000, 'localhost')
console.log(`Server listening on 7000`)

// // client
// var s = new net.Socket()
// s.connect(7000)
// s.write('Hello')
// s.end()
