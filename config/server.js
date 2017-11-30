const porta = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})