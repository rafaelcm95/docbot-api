const Diagnosis = require('../model/diagnosis')

Diagnosis.methods(['get', 'post', 'put', 'delete'])

module.exports = Diagnosis