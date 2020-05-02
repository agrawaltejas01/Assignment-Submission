const express = require('express')
const bodyParser = require('body-parser')
var mongo = require('mongoose');
const app = express()

student = require('./Schema/student-schema')
labs = require('./Schema/labs-schema')

app.use(bodyParser.json())

var db = mongo.connect('mongodb://localhost:27017/assignment-submission',
    function (err, response) {
        if (err) {
            console.log(err);
        }

        else {
            console.log("Connected successfully to MongoDB");
        }
    }

)

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.post("/api/FindStudentInBatch", function (req, res) {
    console.log("IGI in API");
    var model = mongo.model('student', studentSchema, 'student')

    model.find(
        { batch: "I.4.P.10" },
        function (err, data) {
            if (err)
                res.send(err);

            else {
                console.log('Following Student Data is retrieved : ');
                console.log(data);

                // res.sendStatus(200) 
                res.send(data);
                // console.log(res.send.data);
            }
        }
    );
})

app.post("/api/getStudent", function (req, res) {
    
    console.log(req.body);
    student.findOne(
        { _id: req.body.id },
        function (err, data) {
            if (err)
                res.send(err);

            else {
                console.log('Following Student Data is retrieved : ');
                console.log(data);
                
                res.send(data);                
            }
        }
    );
})

app.post("/api/getAssignmentList", function (req, res) {
    
    console.log(req.body);
    regexQuery = new RegExp('^' + req.body.dept + '.' + req.body.year);
    console.log('Regex Query : ' + regexQuery);
    labs.findOne(
        { _id: { $regex: regexQuery } },
        function (err, data) {
            if (err)
                res.send(err);

            else {
                console.log('Following Assignment Data is retrieved : ');
                console.log(data);
                
                res.send(data);                
            }
        }
    );
})


app.listen(8080, () => console.log("Api is running"));