const net = require('net')

const host = process.env.HOST || 'localhost'
const port = Number(process.env.PORT || 7878)
const config = { host, port }

console.log(`Creating socket...`)
const socket = new net.Socket()
// const socket = net.createConnection(config)
console.log(`Connecting to server`, config, `...`)
socket.connect(config, () => {
  console.log(`Sending text...`)
  socket.write('Hello')
  console.log(`Ending socket...`)
  socket.end()
})
