var mongo = require('mongoose');

var Schema = mongo.Schema;

const teacherSchema = new Schema({
    _id: { type: String },
    name: { type: String },
    dept: { type: String },    
    teaches: [
        {
            batchId: { type: String },
            subject : { type : String}
        }
    ],
})

const teacher = mongo.model('teacher', teacherSchema, 'teacher')

module.exports = teacher