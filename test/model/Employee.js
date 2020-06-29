const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const EmployeeSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    experience: {
        type: String
    },
    designation: {
        type: String
    },
    department: {
        type: String
    },
    salary: {
        type: Number
    }
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
