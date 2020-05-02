var mongo = require('mongoose');

var Schema = mongo.Schema;

const labSchema = new Schema({
    _id: { type: String },
    dept: { type: String },
    year: { type: Number },
    subject: [
        {
            name: { type: String },
            assignment: [
                {
                    number: { type: Number },
                    title: { type: String },
                    performanceDate : { type : Date }
                }
            ]
        }
    ],
})

const labs = mongo.model('labs', labSchema, 'labs')

module.exports = labs