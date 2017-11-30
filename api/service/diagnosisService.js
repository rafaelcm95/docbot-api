const Diagnosis = require('../model/diagnosis')


Diagnosis.diagnosis.methods(['get', 'post', 'put', 'delete'])
Diagnosis.pacient.methods(['get', 'post'])
Diagnosis.sympton.methods(['get', 'post'])

module.exports = Diagnosis