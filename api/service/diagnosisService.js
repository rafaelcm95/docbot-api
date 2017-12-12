const Diagnosis = require('../model/diagnosis')
const Util = require('../util/util')

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
    Diagnosis.find({'diagnosis': req.body.diagnosis}, 'pacient.sex pacient.age pacient.state', function(err, diagnosis) {
        if(err)
            res.status(500).json({ errors: [err] })
        else {
            if(!diagnosis) {
                res.status(400).json({ error: null })
            } else {
                res.json({
                    occurrences: diagnosis.length,
                    ageAvg: Util.ageAverage(diagnosis),
                    sexAvg: Util.sexPercent(diagnosis),
                    stateCount: Util.countStates(diagnosis)
                })
            }  
        }  
    })  
})

Diagnosis.route('symptom', (req, res) => {
    Diagnosis.find({'diagnosis': req.body.diagnosis}, 'symptons.name', function(err, diagnosis) {
        if(err)
            res.status(500).json({ errors: [err] })
        else {
            if(!diagnosis) {
                res.status(400).json({ error: null })
            } else {
                res.json({
                    occurrences: diagnosis.length,
                    symptons: Util.countSymptons(diagnosis)
                })
            }
        }  
    })   
})

Diagnosis.route('suggestions', (req, res) => {
    Diagnosis.find({"symptons.name": {"$all" : req.body.symptons} }, 'diagnosis', function(err, diagnosis) {
        console.log(diagnosis)
        if(err)
            res.status(500).json({ errors: [err] })
        else {
            if(!diagnosis) {
                res.status(400).json({ error: null })
            } else {
                res.json({
                    occurrences: diagnosis.length,
                    diagnosis: Util.countDiagnostics(diagnosis)
                })                
            }
        }
    })
})

module.exports = Diagnosis