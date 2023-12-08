const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuardianSchema = new Schema({
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
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        minLength: [10, 'You must have atleast 10 numbers'],
        maxLength: [11, 'Maximum amount of numbers is 11'],
        match: [/^[0-9]+$/, 'Only Numbers are allowed']
    },
    address: {
        type: String, 
        required: true
    }, 
    consentRadioOption: {
        type: String,
        enum: ['I do consent', 'I Do Not Consent'],
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Guardian', GuardianSchema);