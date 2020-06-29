const express = require("express");
const Employee = require("../model/Employee");
const router = express.Router();

router.post("/", (req, res) => {
    const email = req.body.email;
    //Find employee by email
    Employee.findOne({ email: req.body.email }).then(employee => {
        if (employee) {
            res.status(400).json({ email: "Email already exists" })
        }
        const newEmployee = new Employee({
            name: req.body.name,
            email: req.body.email,
            avatar: req.body.avatar,
            experience: req.body.experience,
            designation: req.body.designation,
            salary: req.body.salary
        })
        newEmployee.save().then(employee => res.json(employee))
    })
})
module.exports = router;
