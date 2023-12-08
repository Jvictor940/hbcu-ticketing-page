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
        required: true
    },
    phone: {
        type: Number,
        required: true
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