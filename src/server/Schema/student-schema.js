var mongo = require('mongoose');

var Schema = mongo.Schema;

const studentSchema = new Schema({
    _id: { type: String },
    roll: { type: Number },
    name: { type: String },
    dept: { type: String },
    year: { type: Number },
    class: { type: String },
    batch: { type: String },
    submission: [
        {
        subject : { type : String },        
        assignment : [
            {
                number : { type : Number },
                submissionDate : { type : Date },
                link : { type : String },
                marks : { type : Number }
            }
        ]
        }

    ]
})

const student = mongo.model('student', studentSchema, 'student');

module.exports = student