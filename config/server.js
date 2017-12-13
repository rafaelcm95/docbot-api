const porta = 3000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const mongoose = require('mongoose')
const docs = require("express-mongoose-docs")

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
docs(server, mongoose)

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

module.exports = server