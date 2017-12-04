const express = require('express')
const request = require('request')

module.exports = function(server) {
    const router = express.Router()
    const diagnosisService  = require('../api/service/diagnosisService')

    server.use('/api', router)

    diagnosisService.diagnosis.register(router, '/diagnosis')
}