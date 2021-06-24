const express = require('express')
const routes = require('./routes/route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(routes)

const port = 3000

server.listen(port, () => console.log(`Servidor Funcionando na porta ${port}`))
