const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    const diagnosisService  = require('../api/repository/diagnosisRepository')
    const diagnosisAnalyticsService = require('../api/service/diagnosisAnalyticsService')

    server.use('/api', router)

    diagnosisService.register(router, '/repository/diagnosis')
    diagnosisAnalyticsService.register(router, '/analytics/diagnosis')

}