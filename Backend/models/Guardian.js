const mongoose = require('mongoose');
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

GuardianSchema.pre('save', function(next) {
    this.firstName = this.firstName.toUpperCase().charAt(0) + this.firstName.slice(1)
    this.lastName = this.lastName.toUpperCase().charAt(0) + this.lastName.slice(1)

    next()
})

module.exports = mongoose.model('Guardian', GuardianSchema);