const mongoose = require('mongoose')

//Cria a tabela "Person" no banco. 
const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean,
})

module.exports = Person

