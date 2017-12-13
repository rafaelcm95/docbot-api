const Analytics = require('../model/diagnosis')
const Util = require('../util/util')

Analytics.route('count', (req, res, next) => {
    Analytics.count(function(error, value) {
        if(error)
            res.status(500).json({ errors: [error] })
        else
            res.json({ value })
    })
})

Analytics.route('pacient', (req, res) => {
    Analytics.find({'diagnosis': req.body.diagnosis}, 'pacient.sex pacient.age pacient.state', function(err, diagnosis) {
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

Analytics.route('symptom', (req, res) => {
    Analytics.find({'diagnosis': req.body.diagnosis}, 'symptons.name', function(err, diagnosis) {
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

Analytics.route('suggestions', (req, res) => {
    Analytics.find({"symptons.name": {"$all" : req.body.symptons} }, 'diagnosis', function(err, diagnosis) {
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

module.exports = Analytics