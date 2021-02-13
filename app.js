var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

var app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/employeedb", {useNewUrlParser: true});

app.use('/', require('./routes'));

app.listen(8000, function (err) {
    if(err){console.log(err); return}
    else{
        console.log('Server runnning on port 8000');
    }
})