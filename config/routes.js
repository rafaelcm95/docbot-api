const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    const diagnosisService  = require('../api/service/diagnosisService')

    server.use('/api', router)

    diagnosisService.diagnosis.register(router, '/diagnosis')
    diagnosisService.pacient.register(router, '/pacient')
    diagnosisService.sympton.register(router, '/sympton')
}