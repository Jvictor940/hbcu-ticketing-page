const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator')

const AthleteSchema = new Schema({
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
    birthday: {
        type: String
    },
    gender: {
        type: String, 
        required: true,
        enum: [
            'Male', 
            'Female'
        ]
    }, 
    position: {
        type: String,
        enum: [
            'QB', 
            'WR', 
            'RB', 
            'DB', 
            'LB', 
            'D-Line', 
            'O-Line'
        ],
        required: true
    },
    size: {
        type: String,
        enum: [
            'SM', 
            'MD', 
            'LG', 
            'XL', 
            'XXL', 
            'XXXL'
        ],
        required: true
    },
    grade: {
        type: String,
        enum: [
            'Freshman', 
            'Sophmore', 
            'Junior', 
            'Senior'
        ],
        required: true
    },
    ticketRadioOption: {
        type: String,
        enum: [
            'Sponsored Athlete | Free',
            'Athlete Ticket'
        ],
        required: true
    }, 
    disclaimerCheckbox: {
        type: Boolean,
        default: false,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Athlete', AthleteSchema);