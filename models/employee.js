const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    popularity: Number,
    biography: String,
    image: String,
    colleagues: Array
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;