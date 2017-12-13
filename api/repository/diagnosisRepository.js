const Diagnosis = require('../model/diagnosis')
const Util = require('../util/util')

Diagnosis.methods(['get', 'post', 'put', 'delete'])

Diagnosis.route('doctor', (req, res, next) => {
    Diagnosis.find({ 'doctorId': req.body.doctorId }, 'diagnosis symptons', function(err, diagnosis) {
        if(err)
            res.status(500).json({ errors: [err] })
        else {
            if(!diagnosis) {
                res.status(400).json({ error: null })
            } else {
                res.json({
                    doctorDiagnosis: diagnosis
                })
            }
        }
    })
})

Diagnosis.updateOptions({
    new: true,
    runValidators: true
})

module.exports = Diagnosis