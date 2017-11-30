const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_docbot', { useMongoClient: true })