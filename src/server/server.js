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

app.post("/api/submitAssignment", function (req, res) {
    subjectFound = false;
    assignmentFound = false;
    student.findById(req.body.id).then(result => {
        submission = result.submission;
        for (let i = 0; i < submission.length; i++) {
            if (submission[i].subject == req.body.subject) {
                subjectFound = true;

                assignment = submission[i].assignment;
                for (let j = 0; j < assignment.length; j++) {
                    if (assignment[j].number == req.body.number) {
                        assignmentFound = true;
                        console.log("Required subject found at " + i + " and required assignment is found at " + j);

                        // subject and assignment is already submitted, 
                        // update link and submission date
                        data = {};
                        date = new Date();
                        // console.log(date);
                        date = date.toString();
                        // console.log(date);

                        data["submission." + i + ".assignment." + j + ".submissionDate"] = date;
                        data["submission." + i + ".assignment." + j + ".link"] = req.body.link;

                        console.log(data);

                        student.updateOne(
                            {
                                _id: req.body.id
                            },
                            {
                                $set: data
                            },
                            function (err, data) {
                                if (err) {
                                    res.send(err);
                                }

                                else {
                                    console.log("subject and assignment is already submitted, update link and submission date")
                                    res.send(true);
                                }
                            });
                    }
                }

                if (!assignmentFound) {
                    // subject is found but assignment is not found
                    // make a new assignment entry

                    student.updateOne(
                        {
                            _id: req.body.id,
                            'submission.subject': req.body.subject
                        },

                        {
                            $push:
                            {
                                'submission.$.assignment':
                                {
                                    number: req.body.number,
                                    submissionDate: new Date(),
                                    link: req.body.link,
                                    marks: 0
                                }
                            }
                        },

                        function (err, data) {
                            if (err) {
                                res.send(err);
                            }

                            else {
                                console.log("subject found but assignment is not submitted, create new assignment")
                                res.send(true);
                            }
                        });
                }

            }
        }

        if (!subjectFound) 
        {                        
            date = new Date();
            // console.log(date);
            date = date.toString();
            // console.log(date);

            student.updateOne(
                {
                    _id: req.body.id,
                },

                {
                    $push:
                    {
                        submission:
                        {
                            subject: req.body.subject,
                            assignemnt:
                                [
                                    {
                                        number: req.body.number,
                                        submissionDate: date,
                                        link: req.body.link,
                                        marks: 0
                                        // number: 1,
                                        // submissionDate: date,
                                        // link: 'req.body.link',
                                        // marks: 0
                                    }
                                ]
                        }
                    }
                },

                function (err, data) {
                    if (err) {
                        console.log("Error")
                        console.log(err)
                        res.send(err);
                        // break;
                    }
                });
        
            // creating a new subject does not insert in assignment.
            // So do that here.

            // submissionIndex = submissionDate.length - 1;
            student.updateOne(
                {
                    _id: req.body.id,
                    'submission.subject': req.body.subject
                },

                {
                    $push:
                    {
                        'submission.$.assignment':
                        {
                            number: req.body.number,
                            submissionDate: date,
                            link: req.body.link,
                            marks: 0
                        }
                    }
                },

                function (err, data) {
                    if (err) {
                        res.send(err);
                    }

                    else {
                        console.log("subject not found , create new subject and assignment");
                        res.send(true);
                    }
                });
        }


    })


})


app.listen(8080, () => console.log("Api is running"));