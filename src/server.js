const express = require('express')
const routes = require('./routes/routes')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

server.use(routes)

const port = process.env.port || 3000;

server.listen(port, () => console.log(`Servidor Funcionando na porta ${port}`))