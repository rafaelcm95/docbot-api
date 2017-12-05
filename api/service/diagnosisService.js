const Diagnosis = require('../model/diagnosis')
const Util = require('../model/util')

Diagnosis.methods(['get', 'post', 'put', 'delete'])

Diagnosis.updateOptions({
    new: true,
    runValidators: true
})

Diagnosis.route('count', (req, res, next) => {
    Diagnosis.count(function(error, value) {
        if(error)
            res.status(500).json({ errors: [error] })
        else
            res.json({ value })
    })
})

Diagnosis.route('pacient', (req, res) => {
    Diagnosis.find(req.body.diagnosis ? {'diagnosis': req.body.diagnosis.toUpperCase()} : {}, 'pacient.sex pacient.age pacient.state', function(err, diagnosis) {
        if(err)
            res.status(500).json({ errors: [err] })
        else {
            res.json({
                occurrences: diagnosis.length,
                ageAvg: Util.ageAverage(diagnosis),
                sexAvg: Util.sexPercent(diagnosis),
                stateCount: Util.countStates(diagnosis)
            })
        }  
    })  
})

Diagnosis.route('symptom', (req, res) => {
    Diagnosis.find(req.body.diagnosis ? {'diagnosis': req.body.diagnosis.toUpperCase()} : {}, 'symptons.name', function(err, diagnosis) {
        if(err)
            res.status(500).json({ errors: [err] })
        else {
            res.json({
                occurrences: diagnosis.length,
                symptons: Util.countSymptons(diagnosis)
            })
        }  
    })   
})

module.exports = Diagnosis