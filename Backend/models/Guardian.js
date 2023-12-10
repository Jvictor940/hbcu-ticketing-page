const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');
const Schema = mongoose.Schema;
const validator = require('validator');

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
        validate: (email) => validator.isEmail(email)
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, 'You must have atleast 10 numbers for your phone number'],
        maxLength: [11, 'Maximum amount of numbers is 11 for your phone number'],
        match: [/^[0-9]+$/, 'Only Numbers are allowed']
    },
    address: {
        type: String, 
        required: true
    }, 
    consentRadioOption: {
        type: String,
        enum: ['I do consent', 'I Do Not Consent'],
        // required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Guardian', GuardianSchema);