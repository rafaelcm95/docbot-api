module.exports = (function() {
    var countSymptons = (obj) => {
        var count = {}, e

        for (var i = 0; i < obj.length; i++) { 
            e = obj[i]
            count[e.symptons] = (count[e.symptons] || 0) + 1
        }
        return count
    }

    var countDiagnostics = (obj) => {
        var count = {}, e

        for (var i = 0; i < obj.length; i++) { 
            e = obj[i]
            count[e.diagnosis] = (count[e.diagnosis] || 0) + 1
        }
        return count
    }

    var countStates = (obj) => {
        var count = {}, e

        for (var i = 0; i < obj.length; i++) { 
            e = obj[i]
            count[e.pacient.state] = (count[e.pacient.state] || 0) + 1
        }
        return count
    }

    var sexPercent = (arr) => {
        var sexCount = {
            male: 0,
            female: 0
        }

        arr.forEach((_) => {
            if(_.pacient.sex == 'MALE')
                sexCount.male += 1
            else 
                sexCount.female += 1
        })

        return sexCount
    }

    var ageAverage = (arr) => {
        var ageCount = 0

        arr.forEach((_) => {
            ageCount += _.pacient.age
        })

        return ageCount/arr.length
    }

    return {
        countSymptons: countSymptons,
        countStates: countStates,
        sexPercent: sexPercent,
        ageAverage: ageAverage,
        countDiagnostics: countDiagnostics
    }
})()