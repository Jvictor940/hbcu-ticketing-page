const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoachSchema = new Schema({
    firstName: {
        type: String, 
        required: true,
        maxLength: 10
    },
    lastName: {
        type: String, 
        required: true,
        maxLength: 10
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, 'You must have atleast 10 numbers'],
        maxLength: [11, 'Maximum amount of numbers is 11'],
        match: [/^[0-9]+$/, 'Only Numbers are allowed']
    },
    school: {
        type: String, 
        required: true
    },
    schoolEmail: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Coach', CoachSchema);