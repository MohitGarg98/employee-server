var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');

router.get('/get-employees', async function(req, res){
    let data = await Employee.find({});
    res.send(data)
})

router.post('/update-popularity', async function(req, res){
    await Employee.findOne({name: req.body.name}, function(err, employee){
        employee.popularity = req.body.popularity;
        employee.save();
    })
    let data = await Employee.find({});
    res.send(data);
})

module.exports = router;