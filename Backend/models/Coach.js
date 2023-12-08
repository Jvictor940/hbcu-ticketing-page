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
        type: Number,
        required: true
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